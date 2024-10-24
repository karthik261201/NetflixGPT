import { useParams } from "react-router-dom";
import useMoviePlay from "../hooks/useMoviePlay";
import { useSelector } from "react-redux";


const MoviePlay = () => {

    const movieId = useParams();
    useMoviePlay(movieId)
    const playMovie = useSelector(store => store.movie.playMovie)

    return (
        <div>
            <iframe
                className="w-screen h-screen"
                src={"https://www.youtube.com/embed/" + playMovie?.key + "?rel=0&autoplay=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default MoviePlay