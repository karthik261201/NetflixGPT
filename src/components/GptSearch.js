import { BG_URL} from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch