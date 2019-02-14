import React from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

class Movies extends React.Component {
  constructor () {
    super()
    this.state = { moviesArray: [] }
  }

  componentDidMount () {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505'
      )
      .then(response => {
        this.setState({ moviesArray: response.data.results })
      })
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.moviesArray.map(movie => (
            <li key={movie.id}>
              <MovieCard details={movie} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Movies
