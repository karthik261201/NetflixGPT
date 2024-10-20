import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { changeUrl } from "../utils/configSlice";

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
                        dispatch(changeUrl("main"))
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
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && 
                    <input 
                        ref={name} 
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 text-white my-4 w-full bg-white bg-opacity-20 rounded-md"
                    />
                }
                <input 
                    ref={email} 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 text-white my-4 w-full bg-white bg-opacity-20 rounded-md" 
                />
                <input 
                    ref={password} 
                    type="password" 
                    placeholder="Password" 
                    className="p-4 text-white my-4 w-full bg-white bg-opacity-20 rounded-md" 
                />
                <button className="p-3 my-6 bg-red-700 w-full rounded-lg" onClick={validateForm}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-red-600 text-xs">{errorMessage}</p>
                <p className="text-gray-400 mt-4">{isSignInForm? "New to Netflix? " : "Already a member? " }
                    <span className="text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm? " Sign up now!" : " Login now!" }
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;