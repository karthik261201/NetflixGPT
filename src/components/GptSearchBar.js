import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.language)
    const searchText = useRef(null);
    // console.log(langKey)

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
    
        return json.results;
    };
    
    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value)
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value +". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
        // if (!gptResults.choices) { console.log("error") }
        // console.log(gptResults.choices?.[0]?.message?.content);

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        
        // console.log(tmdbResults);

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    }

    return (
        <div className="pt-[50%] md:pt-[15%] flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-80">
                <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button onClick={handleGptSearchClick} className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar