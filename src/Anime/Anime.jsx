import './Anime.css'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {getAnimeDetails} from '../Utilities/ApiCalls'
import Dropdown from '../DropDown/DropDown'



function Anime() {
  const [anime, setAnime] = useState({})
  const [image, setImage] = useState({})

  const location = useLocation();
  const path = location.pathname.split('/')
  const animeID = path[1]

  const genres = anime.genres?.map((genre) => {
    return (
      `${genre.name} | `
    )
  })
  
  useEffect(() => {
    getAnimeDetails(animeID)
    .then(anime =>  setAnime(anime.data))
    .then(image => setImage(image.data.images.jpg))
    .catch(error => error.status)
  })
  
    return (
      
      <div className='anime-container'>
        <div className='image-container'>
          <h1>{anime.title}</h1>
          {/* <h2>{album.artist}</h2> */}
          <img className="anime-artwork" src={image.large_image_url} alt={anime.title}/>
        </div>
        {/* <div className='track-list'>
          {formatTrackList}
        </div> */}
        <div className='details-container'>
          {/* <p>Release Date: {anime.release_date}</p> */}
          <p>Type: {anime.type}</p>
          <p> Episodes: {anime.epsiodes}</p>
          <p>{anime.duration}</p>
          <p> Rating: {anime.rating}</p>
          <p>Rank: {anime.rank}</p>
          <p>Genres: {genres}</p>
          <p>{anime.synopsis}</p>
          <Link to="/">
          <button >GO BACK HOME</button>
          </Link>
          <Dropdown />
        </div>
      </div>
    )
  }

 export default Anime