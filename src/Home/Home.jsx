// import { AcUnit } from '@material-ui/icons'
// import React from 'react'
import "./Home.scss"
import Navbar from "../Components/Navbar/Navbar"
import Featured from "../Components/Featured/Featured"
import Rows from "../Components/Rows/Rows"
import requests from "../urls"

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        <Rows 
          title="Netflix Originals"
          fetchUrl={requests.fetchOriginals}
          isLargeRow
        />
        <Rows 
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Rows 
          title="Action Movies"
          fetchUrl={requests.fetchAction}
        />
        <Rows 
          title="Comedy Movies"
          fetchUrl={requests.fetchComedy}
        />
        <Rows 
          title="Horror Movies"
          fetchUrl={requests.fetchHorror}
        />
        <Rows 
          title="Romance Movies"
          fetchUrl={requests.fetchRomance}
        />
        <Rows 
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />

    </div>
  )
}

export default Home