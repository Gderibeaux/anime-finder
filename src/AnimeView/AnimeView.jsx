import './AnimeView.css'
import React from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useState, useEffect } from 'react';
import AnimeGenre from '../AnimeGenre/AnimeGenre'
import { Link } from 'react-router-dom'
import RandomAnimeButton from '../GetRandom/GetRandom'


function AnimeView() {
    const [animes, setData] = useState([]);

    useEffect(() => {
  
      fetch('https://api.jikan.moe/v4/top/anime')
        .then(response => response.json())
        .then(json => {
          setData(json.data);
        })
        .catch(error => console.log(error));
    }, []);

    
 
    return (
      <div className="home-view">
      
      <div className="anime-view">
        {(animes) && animes.map((anime, index) => {
            return (
              <div>
              <div>
                <AnimeCard anime={anime} key={index} />
              </div>

              </div>
            )
        })}
          <div className="side-bar">
            <RandomAnimeButton />
            <AnimeGenre />
          </div>
          <Link to="/status">
            <button>Go TO Status</button>
          </Link>
          
      </div>
      </div>
    )
  }
  
  export default AnimeView