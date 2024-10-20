import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    // fetch tmdb data and update the store
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies)
    console.log("Top Rated Movies -> ",topRatedMovies)

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS)
        const json = data.json()
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
    },[dispatch, topRatedMovies])
}

export default useTopRatedMovies