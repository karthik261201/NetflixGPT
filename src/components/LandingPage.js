import { useNavigate } from "react-router-dom"
import { API_OPTIONS, BG_URL, LOGO } from "../utils/constants"
import { useDispatch } from "react-redux"
import { changeUrl } from "../utils/configSlice"
import { useEffect } from "react"

const LandingPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignUp = () => {
        console.log("signup clicked")
        dispatch(changeUrl("login"))
        navigate("/login")
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-gradient-to-b from-black absolute z-10 w-full bg-black lg:bg-transparent pb-2 lg:pb-0 lg:pt-4">
                <img
                className="w-[5rem] lg:w-[10rem] brightness-100 contrast-150 ml-3 mt-1 lg:mt-0 lg:ml-10"
                src={LOGO}
                alt="logo"
                />
                <button
                    onClick={handleSignUp}
                    className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md text-white font-bold content-center"
                >
                    Sign Up
                </button>
            </div>
           <div className="absolute">
                <img className="h-screen object-cover" src={BG_URL} alt="Netflix Background"/>
            </div>
        </div>
    )
}

export default LandingPage