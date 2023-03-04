import "./AnimeGenreCard.css"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const AnimeGenreCard = ({genre}) => {
    console.log(genre)
    return (
      <div className="anime-genre-card">
        <Link to={{
            pathname: `/${genre.mal_id}`
        }}>
        </Link>
      </div>
    )
  }
  
  export default AnimeGenreCard