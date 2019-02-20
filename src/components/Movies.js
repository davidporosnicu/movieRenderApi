import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getMoviesList } from "../actions/moviesActions";

class Movies extends React.Component {
  componentDidMount() {
    this.props.getMoviesList();
  }

  render() {
    const { moviesArray } = this.props;
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {moviesArray.map(movie => (
            <li key={movie.id}>
              <MovieCard details={movie} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesArray: state.movie.moviesArray
  };
};

export default connect(
  mapStateToProps,
  { getMoviesList }
)(Movies);
