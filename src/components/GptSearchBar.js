import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef, useState } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import { addGptMovieResult, showError } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestion";
import Loader from "./Loader";

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const errorMessage = useSelector((store) => store.gpt.error);
    const langKey = useSelector(store => store.config.language)
    const searchText = useRef(null);
    const [loading, setLoading] = useState(false);

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
      try{
        setLoading(true); 

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value +". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        searchText.current.value = ""

        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "system", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });

        if (!gptResults.choices) { console.error("error") }

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
      }
      catch (error) {
        console.error("Error fetching GPT results", error);
        dispatch(showError(error.message));
      }
      finally {
        setLoading(false);
      }
    }   

    return (
          <div
            className="text-white pt-[15rem] min-h-screen bg-auto relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BG_URL})`,
            }}
          >
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-8 px-4 text-center">
                {lang[langKey].gptHeading}
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className="m-1 lg:m-2 p-1 lg:p-2 flex justify-center mb-[2rem] lg:mb-[5rem]">
                <input 
                  ref={searchText} 
                  type="text" 
                  className="p-4 text-white placeholder-white text-md sm:text-md md:text-lg lg:text-2xl m-1 w-[65%] sm:w-[50%] md:w-[50%] lg:w-[45%] bg-blue-300 bg-opacity-20 rounded-md border-2" 
                  placeholder={lang[langKey].gptSearchPlaceholder} 
                />
                <button onClick={handleGptSearchClick} className="bg-red-700 hover:contrast-100 contrast-150 font-bold p-4 m-1 text-lg lg:text-2xl rounded-md text-white content-center">
                  {lang[langKey].search} →
                </button>
            </form>

            {loading && (
              <div className="flex justify-center mt-4">
                <Loader />
              </div>
            )}

            {!loading && errorMessage && (
              <div className="flex justify-center">
                <h1 className="text-white p-2 m-2 w-fit text-center font-bold items-center text-md lg:text-xl">
                  {lang[langKey].gptError}
                </h1>
              </div>
            )}

            {!loading && !errorMessage && <GptMovieSuggestions />}
        </div>
    )
}

export default GptSearchBar