import React from 'react';
import axios from 'axios';

class Movie extends React.Component {
  constructor(){
    super();
    this.state = { movie: '' }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    const data = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505')
    .then(response => {
      const movie = response.data.results.filter(x => x['id'] === JSON.parse(id));
      const objMovie = movie.pop();
      this.setState({movie: objMovie})
    })
  }

  render() {
    const image = `https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`;
    return (
      <div className="ui container">
        <div className="ui medium centered image card">
          <div className="image">
            <img src={image} /> 
          </div>
          <div className="content">
            <h2 className="header">{this.state.movie.title}</h2>
            <div class="meta">
            <span class="date">Release date: {this.state.movie.release_date}</span>
          </div>
          <div class="description">{this.state.movie.overview}
          </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Movie;