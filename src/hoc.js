import React from "react";
import axios from "axios";

export default (Component, predicate = () => true) => {
  const result = class Hoc extends React.Component {
    state = { moviesArray: [] };
    componentDidMount() {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505"
        )
        .then(response => {
          this.setState({
            moviesArray: response.data.results.filter(predicate)
          });
        });
    }

    render() {
      return <Component moviesArray={this.state.moviesArray} />;
    }
  };

  return result;

  // return connect({}, {})(result);
};
