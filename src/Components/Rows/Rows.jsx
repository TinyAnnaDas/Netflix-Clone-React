import YouTube from 'react-youtube';
import React, { useEffect, useState  } from 'react'
import axios from '../../axios';
import "./Rows.scss"
import { API_KEY, imageUrl} from '../../constants/constants'



function Rows({title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("")

    useEffect(()=>{
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
          })
    }, [fetchUrl])

    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleTrailer = (id) => {

        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if (response.data.results.length !== 0){
            // console.log(response.data.results[1])
            const mycols = response.data.results
            mycols.forEach((mycol)=>{
                if (mycol.type==="Trailer"){
                    setUrlId(mycol.key)
                }
                
            });
            
            }
            else{
            console.log("Array empty")
            }
        })
    }

  return (
    <div className='row '>
        <h2 className=''>{title }</h2>
         {urlId && <YouTube  opts={opts} videoId={urlId} />}
        <div className="row__posters">
            { movies.map((movie, index)=>(
                <img onClick={()=>handleTrailer(movie.id)} className={`row__poster ${isLargeRow && "row__posterLarge"}` }
                    key={index} src={`${imageUrl}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt="" 
                />
            ))}
        </div> 
    </div>
  )
}

export default Rows