import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="Netflix Background" />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90 rounded-md'>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700' />
                <button className='p-4 my-4 w-full bg-red-700 rounded-lg'>Sign In</button>
                <p>New to Netflix? Sign up now.</p>
            </form>
        </div>
    )
}

export default Login