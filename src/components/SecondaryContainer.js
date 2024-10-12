import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

	const movies = useSelector(store => store.movie)
	// console.log(movies.nowPlayingMovies)

    return (
        <div className="bg-black">
			<div className="m-0 md:-mt-56 pl-4 md:pl-12 relative z-20">
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