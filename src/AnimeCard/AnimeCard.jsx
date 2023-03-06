import './AnimeCard.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const AnimeCard = ({anime}) => {
    // console.log(anime)
    return (
      <div className="anime-card">
        <Link to={{
            pathname: `/${anime.mal_id}`
        }}>
        <img
            className="anime-image"
            src={anime.images.jpg.image_url}
            alt={`${anime.title}`}
        />
        </Link>
      </div>
    )
  }
  
  export default AnimeCard