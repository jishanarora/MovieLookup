import MoviesActionTypes from './movies.types';

const INITIAL_STATE = {
  movieList: [],
  searchField: "",
  nominations: []
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.UPDATE_LIST:
      return {
        ...state,
        movieList: action.payload===undefined? [] : action.payload
      };
      case MoviesActionTypes.UPDATE_SEARCH:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;