import React from "react";
import queryString from "query-string";
import MovieList from "./MovieList";
import { connect } from "react-redux";
import { getMovieFromImput } from "../actions/moviesActions";

class SearchMovie extends React.PureComponent {
  state = { name: "" };

  getQueryName() {
    const values = queryString.parse(this.props.location.search);
    return values.name;
  }

  componentDidMount() {
    const name = this.getQueryName();
    this.props.getMovieFromImput(name);
  }

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search/",
      search: `?name=${this.state.name}`
    });
    this.props.getMovieFromImput(this.state.name);
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <br />
            <label>Movie Search</label>
            <input
              type="text"
              placeholder="Type a movie"
              defaultValue={this.getQueryName()}
              onChange={this.onInputChange}
            />
            <br />
            <br />
            <button className="right floated ui black basic button">
              Seach Movie
            </button>
            <br />
            <br />
          </div>
        </form>
        <MovieList moviesArray={this.props.moviesArray} />
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
  { getMovieFromImput }
)(SearchMovie);
