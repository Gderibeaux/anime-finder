import './Anime.css'
import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import {getAnimeDetails} from '../Utilities/ApiCalls'
import { render } from "@testing-library/react";
import Dropdown from '../DropDown/DropDown'

let animeIndiv

class Anime extends Component {
    
  constructor() {
    super();
    this.state = {
      anime: "",
      error: "",
    };
  }
  
  componentDidMount() {
    getAnimeDetails(this.props.animeID)
    .catch((error) => {
      console.error(error.message);
      this.setState({ error: error.message });
    })
    .then((data) => {
      animeIndiv = data;
    })
    .then(() => {
      this.setState({ anime: animeIndiv
       });
    
    })
  }
 
  render () {
     let whatToRender;
     if(this.state.anime.data){
      whatToRender = 
        <div
        className="anime-container"
        // style={{ backgroundImage: `url(${this.state.anime.images.jpg.image_url})` }}
        >
        <div className="image-container">
        <img className="anime-artwork" src={this.state.anime.data.images.jpg.large_image_url} alt={this.state.anime.data.title}/>
        </div>
        <div className="details-container">
        <h1>{this.state.anime.data.title}</h1>
       
          <p>Release Date: {this.state.anime.data.release_date}</p>
          <p>Type: {this.state.anime.data.type}</p>
          <p> Episodes: {this.state.anime.data.epsiodes}</p>
          <p>{this.state.anime.data.duration}</p>
          <p> Rating: {this.state.anime.data.rating}</p>
          <p>Rank: {this.state.anime.data.rank}</p>
          {/* <p>Genres: {genres}</p> */}
          <p>{this.state.anime.data.synopsis}</p> 
          {/* <p>{this.state.individual.overview}</p>
          <p>Release Date: {this.state.individual.release_date}</p>
          <p>Average Rating: {this.state.individual.average_rating}/10</p>
          <p>Genres: {this.state.individual.genres.join(", ")}</p> */}
          {/* <p>
            Budget:{" "}
              {this.state.individual.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                }
              )
            }
          </p>
          <p>
            Revenue:{" "}
              {this.state.individual.revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                }
              )
            }
          </p>
          <p>Runtime: {this.state.individual.runtime} minutes</p> */}
          <Link to="/">
            <button >GO BACK HOME</button>
          </Link>
        </div>
      </div>
    } else if (this.state.error) {
      whatToRender = <p className="Error">{this.state.error}</p>
    } else {
      whatToRender = <p>Loading...</p>
    }

    return(
      <>
      {whatToRender}
      </>
    )
  }
}
console.log()
// function Anime() {
//   const [anime, setAnime] = useState({})
//   const [image, setImage] = useState({})

//   const location = useLocation();
//   const path = location.pathname.split('/')
//   const animeID = path[1]

//   const genres = anime.genres?.map((genre) => {
//     return (
//       `${genre.name} | `
//     )
//   })
  
//   useEffect(() => {
//     getAnimeDetails(animeID)
//     .then(anime =>  setAnime(anime.data))
//     .then(image => setImage(image.data.images.jpg))
//     .catch(error => error.status)
//   })
  
//     return (
      
//       <div className='anime-container'>
//         <div className='image-container'>
//           <h1>{anime.title}</h1>
//           {/* <h2>{album.artist}</h2> */}
//           <img className="anime-artwork" src={image.large_image_url} alt={anime.title}/>
//         </div>
//         {/* <div className='track-list'>
//           {formatTrackList}
//         </div> */}
//         <div className='details-container'>
//           {/* <p>Release Date: {anime.release_date}</p> */}
//           <p>Type: {anime.type}</p>
//           <p> Episodes: {anime.epsiodes}</p>
//           <p>{anime.duration}</p>
//           <p> Rating: {anime.rating}</p>
//           <p>Rank: {anime.rank}</p>
//           <p>Genres: {genres}</p>
//           <p>{anime.synopsis}</p>
//           <Link to="/">
//           <button >GO BACK HOME</button>
//           </Link>
//           <Dropdown />
//         </div>
//       </div>
//     )
//   }

 export default Anime