import React from 'react'
import MovieCard from './MovieCard'

class MovieList extends React.PureComponent {
  render () {
    return (
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {this.props.moviesArray.map(movie => (
            <li key={movie.id}>
              <MovieCard details={movie} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default MovieList
