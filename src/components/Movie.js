import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../css/Movie.css';

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div key={id} className="movie-container">
            <img src={coverImg} alt={title}></img>
            <div>
              <h1><Link to={`/movie/${id}`} className="link">{title}</Link></h1>
              <p className='summary'>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
              <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
            
          </div>
    );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  
};

export default Movie;