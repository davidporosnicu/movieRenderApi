import React from 'react'
import MovieCard from './MovieCard'

const MovieList = props => {
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {props.moviesArray.map(movie => (
          <li key={movie.id}>
            <MovieCard details={movie} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
