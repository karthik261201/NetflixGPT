import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

	const movies = useSelector(store => store.movie)

    return (
        <div className="bg-black">
			<div className="lg:-mt-56">
				<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Top Rated"} movies={movies.upcomingMovies} />
				<MovieList title={"Popular"} movies={movies.popularMovies} />
				<MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
			</div>
        </div>
    )
}

export default SecondaryContainer