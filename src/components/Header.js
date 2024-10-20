import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage, changeUrl } from '../utils/configSlice';
import logo from "../utils/images/gpt-icon.png"

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const url = useSelector(store => store.config.url)

    const handleSignOut = () => {
        signOut(auth).
            then(() => { 
                dispatch(removeUser());
                navigate("/");
                dispatch(changeUrl("landing"))
            })
            .catch((error) => {
                navigate("/error")
            });
    }

    const handleHomeToggle = () => {
        dispatch(changeUrl("main"))
    }

    const handleGptToggle = () => {
        dispatch(changeUrl("gpt"))
    }

    const handleLanguageChange = (e) => {
        const lang = e.target.value
        dispatch(changeLanguage(lang))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                dispatch(changeUrl("main"))
                navigate("/browse")
            } else {
                dispatch(removeUser())
              navigate("/login")
            }
        });

        // this is will be unsubscribed when component unmounts
        return () => unsubscribe()
    }, [])

    return (
        <div className={`flex justify-between items-center bg-gradient-to-b ${url === "main" ? 'bg-black' : 'from-transparent'} absolute z-10 w-full pb-2 lg:pb-0 lg:pt-4`}>
            <img
                className="w-[5rem] lg:w-[10rem] brightness-100 contrast-150 ml-2 mt-1 lg:mt-0"
                src={LOGO}
                alt="logo"
            />

            <div className="flex items-center mr-2 lg:mr-10">
                
                {   url === "main" && (
                    <>
                        <h1 className="hidden lg:inline-block text-white text-sm px-4">
                            Hello, {user?.displayName?.split(" ")?.filter((word) => word)[0]}
                        </h1>

                        <button
                            onClick={handleGptToggle}
                            className="text-xs lg:text-sm mx-6 p-1 lg:p-2 text-white hover:border hover:rounded-lg"
                        >
                            <img className="w-4 lg:w-6 inline-flex" src={logo} alt="ai" />
                            GPT Search
                        </button>

                        <button
                            className="text-xs lg:text-sm  hover:border hover:rounded-lg py-1 lg:py-2 px-2 lg:px-4  text-white"
                            onClick={handleSignOut}
                        >
                            Logout
                        </button>
                    </>
                )}

                {   url === "gpt" && (
                    <>
                        <select
                            className="text-white p-1 lg:p-2 bg-transparent hover:border hover:rounded-lg mr-5 lg:mr-10 text-xs lg:text-[1rem]"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                    className="text-black text-xs lg:text-[1rem]"
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={handleHomeToggle}
                            className="text-white text-xs lg:text-[1rem] hover:border hover:rounded-lg py-1 lg:py-2 px-3"
                        >
                            Home
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header