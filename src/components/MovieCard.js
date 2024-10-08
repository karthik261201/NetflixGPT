import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = (props) => {

    const {posterPath} = props

    return (
        <div className="w-48 pr-4">
            <img src={IMG_CDN_URL+posterPath} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard