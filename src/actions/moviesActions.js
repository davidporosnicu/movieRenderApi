import axios from "axios";

export const getMoviesList = () => async (dispatch, getState) => {
  const currentState = getState().movie.moviesArray;
  if (currentState.length === 0) {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505"
    );
    dispatch({
      type: "GET_MOVIE_LIST",
      payload: res.data.results
    });
  } else {
    dispatch({
      type: "GET_MOVIE_LIST",
      payload: currentState
    });
  }
};
//

export const getMovie = id => async (dispatch, getState) => {
  const currentState = getState().movie.movie;
  if (!currentState.id || parseInt(id) !== currentState.id) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1f334378cac29e0294a146e77d2aa505`
    );
    dispatch({
      type: "GET_MOVIE",
      payload: res.data
    });
  } else {
    dispatch({
      type: "GET_MOVIE",
      payload: currentState
    });
  }
};

export const getMovieFromImput = imputString => async (dispatch, getState) => {
  const currentState = getState().movie.moviesArray;
  if (currentState.length === 0) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1f334378cac29e0294a146e77d2aa505&language=en-US&query=${imputString}=1&include_adult=false`
    );
    dispatch({
      type: "GET_MOVIE_FROM_IMPUT",
      payload: res.data.results
    });
  } else {
    dispatch({
      type: "GET_MOVIE_FROM_IMPUT",
      payload: currentState
    });
  }
};
