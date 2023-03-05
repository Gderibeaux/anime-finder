import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RandomAnimeButton extends Component {
  handleClick = () => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const animeID = data.data[randomIndex].mal_id;
        this.props.history.push(`/${animeID}`);
      })
      .catch(error => console.log(error));
  };

  render() {
    return <button onClick={this.handleClick}>Random Anime</button>;
  }
}

export default withRouter(RandomAnimeButton);