import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = (props) => {

    useMovieTrailer(props)
    const trailerVideo = useSelector(store => store.movie?.trailerVideo)
    // console.log(trailerVideo)
    
    return (
        <div>
            <iframe 
                className="w-full aspect-video"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?rel=0&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
        </div>
    )
}

export default VideoBackground