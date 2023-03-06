import React from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



function Mystery() {
    const [animes, setData] = useState([]);

    

    useEffect(() => {
  
      fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(json => {
          setData(json.data);
        })
        .catch(error => console.log(error));
    }, []);

 
    const filteredData = animes.filter(obj => {
        return obj.genres.some(genre => genre.name === 'Mystery');
      });
      
      return (
        <div>
          <div className='anime-view'>
             {(animes) && filteredData.map((anime, index) => {
              return (
             <div> 
              <AnimeCard anime={anime} key={index} />
             </div>
              )
             })}
          <Link to="/">
            <button>GO BACK HOME</button>
          </Link>
          </div>
        </div>
      );
}

  
  export default Mystery