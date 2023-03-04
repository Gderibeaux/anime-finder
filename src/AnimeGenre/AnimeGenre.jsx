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
        {/* {(loading) && <p>Loading...</p>}
        {(genres) && genres.map((genre, index) => {
            return (
                genre.mal_id
            )
        })} */}
            <p>Action</p>
            <p>Adventure</p>
            <Link to="/genre/action">
              <button >GO to action</button>
            </Link>
      </div>
    )
  }
  
  export default AnimeGenre