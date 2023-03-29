import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Featured.scss';
import axios from '../../axios';
import { imageUrl } from '../../constants/constants';
import requests from '../../urls'

function Featured({type}) {
    const [movie, setMovie] = useState()

    useEffect(()=> {
        axios.get(requests.fetchTrending).then((response)=> {
            console.log(response.data.results[0])
            const totalMovies = response.data.results.length
            const randomIndex = Math.floor(Math.random()* totalMovies)
            setMovie(response.data.results[randomIndex])
        })

    }, [])

    function truncate(string, n ){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? "Movies": "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
            src= {`${movie ? imageUrl+movie.backdrop_path : ""}`}
            alt="" 
        />
        <div className="fade_bottom"></div>
        <div className="info">
            <div className= "title"><h1>{movie ? movie.title || movie.name || movie.original_name: ""}</h1></div>
            <span className='desc'>
                {truncate(movie ? movie.overview: "", 300) }
            </span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>

        </div>
       
    </div>
  )
}

export default Featured