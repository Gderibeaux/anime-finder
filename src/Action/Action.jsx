
import React from 'react'
// import { getAnime } from '../Utilities/ApiCalls'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useState, useEffect } from 'react';
import AnimeGenre from '../AnimeGenre/AnimeGenre'


function Action() {
    const [animes, setData] = useState([]);
    const [filterGenre, setFilteredGenre] = useState([])
    const [filteredAnimes, setFilteredAnimes] = useState([]);
    

    useEffect(() => {
  
      fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(json => {
          setData(json.data);
        })
        .catch(error => console.log(error));
    }, []);

 
    const filteredData = animes.filter(obj => {
        return obj.genres.some(genre => genre.name === 'Action');
      });
      
        return (
            <div className='action-view'>
                <h1>List of Items {console.log('Figure it out', filteredData)}</h1>
               {(animes) && filteredData.map((anime, index) => {
                return (
               <div> 
                <AnimeCard anime={anime} key={index} />
               </div>
                )
               })}
            </div>
        );
}

  
  export default Action



