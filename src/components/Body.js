import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import MoviePlay from './MoviePlay'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />,
            children: [
                {
                    path: "/browse/watch/:id",
                    element: <MoviePlay />,
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body