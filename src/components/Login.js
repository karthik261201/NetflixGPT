import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKTVlVYke83GHTIW2WpOvixmWyf8fgxsE5t2KjEvicpHYYMBQ=s96-c"
                      }).then(() => {
                        const { uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        navigate("/browse")
                      }).catch((error) => {
                        setErrorMessage("Oops some error occured");
                      }); 
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("Oops some error occured");
                });
        } 
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("User does not exist");
                    console.log(errorCode+errorMessage)
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="Netflix Background"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
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