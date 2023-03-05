import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../AnimeCard/AnimeCard";


const CompletedAnimes = ({ completedList }) => {
    console.log('this is completed', completedList)
    if (!completedList) {
      return null; // or render a loading message
    }
  
    const completedAnimesFiltered = completedList.filter((anime) => {
      return anime.status === "completed";
    });
  
    const animeCards = completedAnimesFiltered.map((anime) => (
      <AnimeCard key={anime.data.mal_id} anime={anime} />
    ));
  
    return (
      <div>
        <h1>Completed Animes</h1>
        {animeCards.length > 0 ? (
          animeCards
        ) : (
          <p>No completed animes yet.</p>
        )}
      </div>
    );
  };
  
  export default CompletedAnimes;