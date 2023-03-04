import './AnimeView.css'
import React from 'react'
// import { getAnime } from '../Utilities/ApiCalls'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useState, useEffect } from 'react';
import AnimeGenre from '../AnimeGenre/AnimeGenre'


function AnimeView() {
    const [animes, setData] = useState([]);

    useEffect(() => {
    //   console.log('Fetching data...');
  
      fetch('https://api.jikan.moe/v4/top/anime')
        .then(response => response.json())
        .then(json => {
        //   console.log('Fetched data:', json.data);
          setData(json.data);
        })
        .catch(error => console.log(error));
    }, []);

    
 
    return (
      <div className="anime-view">
        {/* {(loading) && <p>Loading...</p>} */}
        <h1>Help {console.log('we got this', animes)}</h1>
        {(animes) && animes.map((anime, index) => {
            return (
              <div>
              <div>
                <AnimeCard anime={anime} key={index} />
              </div>

              </div>
            )
        })}
          <div>
            <AnimeGenre />
          </div>
      </div>
    )
  }
  
  export default AnimeView