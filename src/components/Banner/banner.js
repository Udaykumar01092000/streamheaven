import React , {useState , useEffect}  from 'react'
import './banner.css'
import axios from 'axios'
import api from '../../apis/api'

const Banner = () => {

    const [movies , setMovies] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API }${api.fetchNetflixOriginals}`)
        .then((res)=>{
            console.log(res);
            setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)
            ])
        })
    },[])
    
    const truncate = (str , n) => {
        return str?.length > n ? str.substr(0 , n-1) + "..." : str
    }

  return (
    <div>
        <header className='banner'
        style={{backgroundImage : `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`}}>
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>
                    {truncate(movies?.overview, 150)}
                </h1>
            </div>
            <div className='banner-fadeBottom'></div>
        </header>
    </div>
  )
}

export default Banner