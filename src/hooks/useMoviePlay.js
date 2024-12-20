import { useEffect } from "react"
import { TMDB_KEY} from '../utils/constants'
import { useDispatch } from "react-redux"
import { addPlayMovie } from "../utils/movieSlice"

const useMoviePlay = (props) => {
    // console.log(props)
    const dispatch = useDispatch()
    const {id} = props
    // console.log(id)

    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_KEY}`)
            const json = await data.json()
            // console.log(json)

            const filterData = json.results.filter( m => m.type === "Trailer")
            const playMovie = filterData.length ? filterData[0] : filterData.results[0]
            // console.log(playMovie)
            dispatch(addPlayMovie(playMovie))
        }
        catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    }

    useEffect(() => {
        getMovieVideos()
    },[])
}

export default useMoviePlay