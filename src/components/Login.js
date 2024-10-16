import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const validateForm = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                      }).then(() => {
                        const { uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                      }).catch((error) => {
                        setErrorMessage("Oops some error occured");
                      }); 
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    setErrorMessage("Oops some error occured");
                });
        } 
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    // console.log(user)
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    setErrorMessage("User does not exist");
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="h-screen object-cover" src={BG_URL} alt="Netflix Background"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={validateForm}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-red-600 text-xs">{errorMessage}</p>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now.": "Already registered? Sign in now."}</p>
            </form>
        </div>
    );
};

export default Login;