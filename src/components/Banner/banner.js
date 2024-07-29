// import React, { useState, useEffect } from 'react';
// import './banner.css';
// import axios from 'axios';
// import api from '../../apis/api';

// const Banner = () => {
//     const [movie, setMovie] = useState(null);

//     const fetchMovie = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`);
//             const movies = response.data.results;
//             const randomIndex = Math.floor(Math.random() * movies.length);
//             setMovie(movies[randomIndex]);
//         } catch (error) {
//             console.error('Failed to fetch movie:', error);
//         }
//     };

//     useEffect(() => {
//         // Initial fetch
//         fetchMovie();

//         // Set interval to fetch new movie every 4 seconds
//         const interval = setInterval(fetchMovie, 4000);

//         // Clear interval on component unmount
//         return () => clearInterval(interval);
//     }, []);

//     const truncate = (str, n) => {
//         return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//     };

//     return (
//         <div>
//             <header className='banner'
//                 style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>
//                 <div className='banner-contents'>
//                     <h1 className='banner-title'>
//                         {movie?.title || movie?.name || movie?.original_name}
//                     </h1>
//                     <div className='banner-buttons'>
//                         <button className='banner-button'>Play</button>
//                         <button className='banner-button'>My List</button>
//                     </div>
//                     <h1 className='banner-description'>
//                         {truncate(movie?.overview, 150)}
//                     </h1>
//                 </div>
//                 <div className='banner-fadeBottom'></div>
//             </header>
//         </div>
//     );
// };

// export default Banner;


import React, { useState, useEffect, useRef } from 'react';
import './banner.css';
import axios from 'axios';
import api from '../../apis/api';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'transform 1s ease-in-out';
          sliderRef.current.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

          setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % movies.length;
            if (newIndex === 0) {
              setTimeout(() => {
                sliderRef.current.style.transition = 'none';
                sliderRef.current.style.transform = 'translateX(0)';
              }, 1000); // Match the transition duration
            }
            return newIndex;
          });
        }
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, movies.length]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="banner-slider">
      <div className="banner-slider-inner" ref={sliderRef}>
        {movies.map((movie) => (
          <header
            key={movie.id}
            className='banner'
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}
          >
            <div className='banner-contents'>
              <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
              </div>
              <h1 className='banner-description'>
                {truncate(movie?.overview, 150)}
              </h1>
            </div>
            <div className='banner-fadeBottom'></div>
          </header>
        ))}
      </div>
    </div>
  );
};

export default Banner;
