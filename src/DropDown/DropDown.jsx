import React, { useState, useEffect } from 'react';
import {getAnimeDetails} from '../Utilities/ApiCalls'
import { useLocation } from 'react-router-dom'

function Dropdown() {
  const [anime, setAnime] = useState({})
  const [selectedValue, setSelectedValue] = useState('');
  const [completedMovies, setCompletedMovies] = useState([]);
  const [planToWatchMovies, setPlanToWatchMovies] = useState([]);

  const location = useLocation();
  const path = location.pathname.split('/')
  const animeID = path[1]

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddMovie = () => {
    if (selectedValue === 'completed') {
      setCompletedMovies([...completedMovies, { title: anime.title }]);
    } else if (selectedValue === 'planToWatch') {
      setPlanToWatchMovies([...planToWatchMovies, { title: 'Movie title' }]);
    }
  };
  useEffect(() => {
    getAnimeDetails(animeID)
    .then(anime =>  setAnime(anime.data))
    .catch(error => error.status)
  })

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">--Select an option--</option>
        <option value="completed">Completed</option>
        <option value="planToWatch">Plan to Watch</option>
      </select>
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
}

export default Dropdown