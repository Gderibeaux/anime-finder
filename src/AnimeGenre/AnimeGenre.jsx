import './AnimeGenre.css'
import React from 'react'
import { getAnime } from '../Utilities/ApiCalls'
import AnimeGenreCard  from '../AnimeGenreCard/AnimeGenreCard'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function AnimeGenre() {
    const [genres, setData] = useState([]);

    // useEffect(() => {
    //   console.log('Fetching data...');
  
    //   fetch('https://api.jikan.moe/v4/genres/anime')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('GENRE data:', data);
    //       setData(data);
    //     })
    //     .catch(error => console.log(error));
    // }, []);

    
 
    return (
      <div className="anime-genre">
            <h3>Choose A Genre</h3>
            <Link to="/genre/action">
              <button >ACTION</button>
            </Link>
            <Link to="/genre/adventure">
              <button >ADVENTURE</button>
            </Link>
            <Link to="/genre/comedy">
              <button >Comedy</button>
            </Link>
            <Link to="/genre/romance">
              <button >Romance</button>
            </Link>
            <Link to="/genre/fantasy">
              <button >Fantasy</button>
            </Link>
            <Link to="/genre/horror">
              <button >Horror</button>
            </Link>
            <Link to="/genre/mystery">
              <button >Mystery</button>
            </Link>
            <Link to="/genre/sports">
              <button >Sports</button>
            </Link>
      </div>
    )
  }
  
  export default AnimeGenre