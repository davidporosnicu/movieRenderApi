import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render(){
    const eachMovie = this.props.moviesArray.map(movie =>
        <li className="ui raised very padded text container segment">
          <h2 className="ui header">{movie.title}</h2>
          <p>{movie.overview}</p>
          <Link to={'/movie/' + movie.id}>
          <button  type="submit" className="right floated ui black basic button"> View
          </button>
          </Link>
        </li>
      )  
    
    return(
      <div>
        <ul>
          {eachMovie}
        </ul> 
      </div>
    )
  }
}

export default MovieCard;