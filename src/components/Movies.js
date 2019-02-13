import React from 'react';
import MovieCard from './MovieCard';

const Movie = (props) => {

  return (
    <div>
      <MovieCard changePage={props.changePage} moviesArray={props.moviesArray}/>
   </div>
  )
}

export default Movie;