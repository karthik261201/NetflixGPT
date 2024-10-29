import { useDispatch, useSelector } from "react-redux"
import { TMDB_KEY} from '../utils/constants'
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    // fetch tmdb data and update the store
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies)

    const getTopRatedMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&page=1`)
        const json = data.json()
        // console.log(json.results)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
    },[dispatch, topRatedMovies])
}

export default useTopRatedMovies