// import './AnimeGenre.css'
// import React from 'react'
// import { getAnime } from '../Utilities/ApiCalls'
// import AnimeCard from '../AnimeCard/AnimeCard'
// import { useState, useEffect } from 'react';


// function AnimeGenre() {
//     const [genre, setData] = useState([]);

//     useEffect(() => {
//       console.log('Fetching data...');
  
//       fetch('https://api.jikan.moe/v4/genres/anime')
//         .then(response => response.json())
//         .then(json => {
//           console.log('Fetched data:', json.data);
//           setData(json.data);
//         })
//         .catch(error => console.log(error));
//     }, []);

    
 
//     return (
//       <div className="anime-genre">
//         {/* {(loading) && <p>Loading...</p>} */}
//         {(genre) && genre.map((genre, index) => {
//             return (
//                 // <AnimeCard genre={genre} key={index} />
//             )
//         })}

//       </div>
//     )
//   }
  
//   export default AnimeGenre