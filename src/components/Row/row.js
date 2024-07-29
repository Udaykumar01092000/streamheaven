import React , {useEffect , useState , useRef} from 'react'
import axios from 'axios'
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({title , fetchUrl , isLargeRow}) => {

  const [movies , setMovies] = useState([])
  const [trailerUrl , setTrailerUrl] = useState("");

  const rowRef = useRef(null);

  // console.log("process.env.REACT_APP_API" , process.env.REACT_APP_API)
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}${fetchUrl}`)
    .then((res)=>{
      setMovies(res.data.results);
      return res;
    })
  },[fetchUrl])

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (rowRef.current && rowRef.current.firstElementChild) {
        const firstChild = rowRef.current.firstElementChild;
        const cardWidth = firstChild.offsetWidth + parseInt(window.getComputedStyle(firstChild).marginRight, 10);

        rowRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });

        setTimeout(() => {
          rowRef.current.appendChild(firstChild);
          rowRef.current.scrollLeft -= cardWidth;
        }, 1000);
      }
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [movies]);


  console.log(movies);

  const handleClick = (movie)=>{
    if(trailerUrl)
    {
      setTrailerUrl("")
    }
    else{
      movieTrailer(movie?.name || " ")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
      }).catch((err)=>{
        console.log("Failed" , err)
        alert("No video Found");
      })
    }
  }

  const opts = {
    height : "390",
    width : "100%",
    playerVars : {
      autoplay : 1,
      rel : 0,
    },
  };

  return (
    <div className= "row">
        <h2>{title}</h2>
        <div className='row-posters' ref = {rowRef}>
          {movies && movies.map((item , i)=>{
            return <img 
            onClick={()=>handleClick(item)}
            key = {item.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`}
            alt = {item.name}
            />
          })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row