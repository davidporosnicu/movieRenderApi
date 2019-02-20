import React from "react";
import { getMovie } from "../actions/moviesActions";
import { connect } from "react-redux";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovie(id);
  }

  render() {
    const { movie } = this.props;
    const image = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    return (
      <div className="ui container">
        <div className="ui medium centered image card">
          <div className="image">
            <img src={image} alt={movie.title} />
          </div>
          <div className="content">
            <h2 className="header">{movie.title}</h2>
            <div className="meta">
              <span className="date">Release date: {movie.release_date}</span>
            </div>
            <div className="description">{movie.overview}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.movie
  };
};

export default connect(
  mapStateToProps,
  { getMovie }
)(Movie);
