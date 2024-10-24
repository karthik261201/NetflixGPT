import { IMG_CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { changeUrl } from "../utils/configSlice";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { posterPath, id } = props
    if (!posterPath) return null;

    const handleMovieClick = () => {
        dispatch(changeUrl("play"))
        navigate(`/browse/watch/${id}`);
    }

    return (
        <div className="w-36 md:w-48 pr-4" onClick={handleMovieClick}>
            <img src={IMG_CDN_URL+posterPath} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard