import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {

    const url = useSelector(store => store.config.url)
    useNowPlayingMovies()
    usePopularMovies()

    return (
        <div>
            <Header />
            {
                url === "gpt" ? <GptSearch /> : 
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default Browse