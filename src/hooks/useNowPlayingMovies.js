import { useEffect } from 'react'
import { TMDB_KEY} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {
    // fetch tmdb data and update the store
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
    // console.log(API_OPTIONS)

    const getNowPlayingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&page=1`)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies()
    },[dispatch, nowPlayingMovies])
}

export default useNowPlayingMovies