import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeUrl } from "../utils/configSlice"

const VideoTitle = (props) => {

    const { title, overview, id } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePlayButton = () => {
        dispatch(changeUrl("play"))
        navigate(`/browse/watch/${id}`);
    }

    return (
        <div className="ml-2 mt-[16%] md:mt-[8%] lg:mt-[13%] absolute z-10">
            <h1 className="font-bold text-lg md:text-2xl lg:text-4xl m-3 text-white">
                {title}
            </h1>
            <p className="hidden md:text-[14px] md:block lg:text-lg lg:block w-[25%] m-3 text-white">
                {overview}
            </p>
            <button onClick={handlePlayButton} className="bg-white w-[3rem] md:w-[7rem] lg:w-32 p-1 md:p-2 lg:p-3 mx-3 my-0 lg:my-4 font-bold rounded text-xs sm:text-md md:text-lg lg:text-lg">
                Play
            </button>
            <button className="bg-zinc-600 w-[5rem] md:w-[8rem] lg:w-[9rem] p-1 md:p-2 lg:p-3 my-0 sm:my-2 md:my-2 lg:my-4 font-bold text-white rounded text-xs sm:text-md md:text-lg lg:text-lg bg-opacity-70">
                More Info
            </button>
        </div>
    )
}

export default VideoTitle