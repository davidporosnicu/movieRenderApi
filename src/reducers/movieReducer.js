const initialState = {
  name: "",
  moviesArray: [],
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return {
        ...state,
        moviesArray: action.payload
      };
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload
      };
    case "GET_MOVIE_FROM_IMPUT":
      return {
        ...state,
        moviesArray: action.payload
      };
    default:
      return state;
  }
}
