import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovieTrailer = (props) => {
    // console.log(props)
    const dispatch = useDispatch()
    const {movieId} = props
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);
    // console.log(movieId)

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS)
        const json = await data.json()
        // console.log(json)

        const filterData = json.results.filter( m => m.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : filterData.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos()
    },[])
}

export default useMovieTrailer;