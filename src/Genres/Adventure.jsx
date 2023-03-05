import React from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useState, useEffect } from 'react';



function Adventure() {
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
        return obj.genres.some(genre => genre.name === 'Adventure');
      });
      
        return (
            <div className='adventure-view'>
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

  
  export default Adventure