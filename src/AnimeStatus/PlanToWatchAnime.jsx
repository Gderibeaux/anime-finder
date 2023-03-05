import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../AnimeCard/AnimeCard";


function PlanToWatchAnimes() {
    const [plannedAnimes, setPlannedAnimes] = useState([]);


    useEffect(() => {
  
  
      fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(json => {
      
          setPlannedAnimes(json.data);
        })
        .catch(error => console.log(error));
    }, []);

    
 
    return (
      <div className="anime-view">
        <h1>Completed Anime</h1>
        <ul>
        {plannedAnimes.map((anime, index) => {
            return (
              <div>
              <div>
                <AnimeCard anime={anime} key={index} />
              </div>

              </div>
            )
        })}
        </ul>
        {/* {(loading) && <p>Loading...</p>} */}

          <Link to="/status">
            <button>Go TO Status</button>
          </Link>
      </div>
    )
  }
  
  export default PlanToWatchAnimes