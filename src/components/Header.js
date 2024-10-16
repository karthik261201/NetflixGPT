import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error")
        });
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName, photoURL} = user;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
              navigate("/browse")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
        });

        // this is will be unsubscribed when component unmounts
        return () => unsubscribe()
    },[])

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        const lang = e.target.value
        dispatch(changeLanguage(lang))
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix logo" />
            {   user &&
                <div className="flex p-2 justify-between">
                    {   showGptSearch &&
                        <select onChange={handleLanguageChange} className='p-2 m-2 bg-gray-700 text-white '>
                        {
                            SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                        }
                        </select>
                    }
                    <button onClick={handleGptSearch} className='py-2 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg'>{ showGptSearch ? "Home Page" : "GPT search" }</button>
                    <img className="hidden md:inline-block w-12 h-12" src={user?.photoURL} alt="user-icon" />
                    <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header