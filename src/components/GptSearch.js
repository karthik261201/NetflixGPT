import { BG_URL} from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-20">
                <img className="h-screen object-cover" src={BG_URL} alt="Netflix Background"/>
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    )
}

export default GptSearch