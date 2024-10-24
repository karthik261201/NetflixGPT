import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MoviePlay from './MoviePlay'
import Footer from './Footer'

const Browse = () => {

    const url = useSelector(store => store.config.url)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()

    return (
        <div>
            <Header />
            {
                url === "play" ? ( <MoviePlay /> ) : 
                url === "gpt" ? ( <GptSearch /> ) : 
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Browse