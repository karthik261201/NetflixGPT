import { useDispatch, useSelector } from "react-redux"
import { TMDB_KEY} from '../utils/constants'
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    // fetch tmdb data and update the store
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies)

    const getUpcomingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&page=1`)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies()
    },[dispatch, upcomingMovies])
}

export default useUpcomingMovies