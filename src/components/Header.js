import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)

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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="Netflix logo" />
            {user &&
                <div className="flex">
                <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="user-icon" />
                <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header