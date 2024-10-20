import MovieCard from "./MovieCard"

const MovieList = (props) => {

    const { title, movies } = props
    if (!movies) return
    // console.log(movies)

    return (
        <div className="px-6">
            <h1 className="font-bold text-lg md:text-2xl text-white py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        movies.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList