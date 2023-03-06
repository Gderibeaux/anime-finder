import React, { Component } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import { searchAnime } from "../Utilities/ApiCalls";
// import "./AnimeList.css";

class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      animeList: [],
      error: "",
    };
  }

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    searchAnime(this.state.searchInput)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        this.setState({ animeList: data.results });
      });
  };

  render() {
    let animeCards;
    if (this.state.animeList) {
      animeCards = this.state.animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ));
    } else {
      animeCards = <p>Loading...</p>;
    }

    return (
      <div className="AnimeList">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for an anime..."
            onChange={this.handleSearchInput}
            value={this.state.searchInput}
          />
          <button type="submit">Search</button>
        </form>
        <div className="AnimeList-grid">{animeCards}</div>
      </div>
    );
  }
}

export default AnimeList;




