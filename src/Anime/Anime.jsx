



import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAnimeDetails } from '../Utilities/ApiCalls'
import Dropdown from '../DropDown/DropDown'
import CompletedAnimes from "../AnimeStatus/CompletedAnime";
import PlanToWatchAnime from "../AnimeStatus/PlanToWatchAnime";
import './Anime.css'


class Anime extends Component {
  constructor() {
    super();
    this.state = {
      anime: "",
      error: "",
      status: "plan to watch",
      completedList: [],
      planToWatchList: [],
    };
  }

  componentDidMount() {
    getAnimeDetails(this.props.animeID)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        this.setState({ anime: data });
      });
  }

  toggleStatus = (status) => {
    this.setState({ status: status }, () => {
      if (status === "completed") {
        this.setState(
          (prevState) => ({
            completedList: [...prevState.completedList, this.state.anime],
          }),
          () => console.log(this.state.completedList)
        );
      } else if (status === "plan to watch") {
        this.setState(
          (prevState) => ({
            planToWatchList: [...prevState.planToWatchList, this.state.anime],
          }),
          () => console.log(this.state.planToWatchList)
        );
      }
    });
  };

  handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "plan to watch") {
      this.setState({
        status: "plan to watch",
      });
    } else if (selectedValue === "completed") {
      this.setState({
        status: "completed",
      });
    }
  };

  render() {
    let whatToRender;
    if (this.state.anime.data) {
      whatToRender = (
        <div className="anime-container">
          <div className="image-container">
            <img
              className="anime-artwork"
              src={this.state.anime.data.images.jpg.large_image_url}
              alt={this.state.anime.data.title}
            />
          </div>
          <div className="details-container">
            <h1>{this.state.anime.data.title}</h1>
            <p>{this.state.anime.data.synopsis}</p>
            <p>Release Date: {this.state.anime.data.release_date}</p>
            <p>Type: {this.state.anime.data.type}</p>
            <p>Episodes: {this.state.anime.data.epsiodes}</p>
            <p>{this.state.anime.data.duration}</p>
            <p>Rating: {this.state.anime.data.rating}</p>
            <p>Rank: {this.state.anime.data.rank}</p>
            <div>
              <button onClick={() => this.toggleStatus("plan to watch")}>
                Plan to Watch
              </button>
              <button onClick={() => this.toggleStatus("completed")}>
                Completed
              </button>
            </div>
            <Link to="/">
              <button>GO BACK HOME</button>
            </Link>
            <Link to="/completed-animes">
              <button>GO Completed</button>
            </Link>
          </div>
        </div>
      );
    } else if (this.state.error) {
      whatToRender = <p className="Error">{this.state.error}</p>;
    } else {
      whatToRender = <p>Loading...</p>;
    }

    return (
      <>
        {whatToRender}
        {this.state.completedList.length > 0 && (
          <CompletedAnimes completedList={this.state.completedList} />
        )}
      </>
    );
  }
}

export default Anime;