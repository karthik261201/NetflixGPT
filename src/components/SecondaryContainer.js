import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

	const movies = useSelector(store => store.movie)
	// console.log(movies.nowPlayingMovies)

    return (
        <div className="bg-black">
			<div className="lg:-mt-56">
				<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Popular"} movies={movies.popularMovies} />
				<MovieList title={"Crime Thriller"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Adventure"} movies={movies.nowPlayingMovies} />
			</div>
        </div>
    )
}

export default SecondaryContainer