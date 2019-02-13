import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  handleChange = () => { 
    this.props.changePage();
  }

  render(){
    const eachMovie = this.props.moviesArray.map(movie =>
        <li key={movie} className="ui raised very padded text container segment">
          <h2 className="ui header">{movie.title}</h2>
          <p>{movie.overview}</p>
          
          <Link className="right floated ui black basic button" to={'/movie/' + movie.id}>
          View
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