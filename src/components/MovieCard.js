import React from 'react';
import axios from 'axios';

class MovieCard extends React.Component {
  state = { moviesArray: [] }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505')
    .then(response => {
      this.setState({moviesArray: response.data.results})
      console.log(this.state.moviesArray);
    })
  }

 

  render(){
    const eachMovie = this.state.moviesArray.map(movie =>
        <li className="ui raised very padded text container segment">
          <h2 className="ui header">{movie.title}</h2>
          <p>{movie.overview}</p>
          <button className="right floated ui black basic button" onClick={this.displayMovie}>View</button>
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