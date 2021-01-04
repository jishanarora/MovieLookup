import MoviesActionTypes from './movies.types';
import {addNominationMovie,removeNominationMovie} from './movies.utils'

const INITIAL_STATE = {
  nominations: [],
  movieList: [],
  searchField: ""
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.UPDATE_LIST:
      return {
        ...state,
        movieList: action.payload===undefined? [] : action.payload
      };
      case MoviesActionTypes.EMPTY_MOVIES:
        return {
          ...state,
          movieList: [] 
        };
      case MoviesActionTypes.UPDATE_SEARCH:
      return {
        ...state,
        searchField: action.payload
      };
      case MoviesActionTypes.ADD_NOMINATION:
      return {
        ...state,
        nominations: addNominationMovie(state.nominations,action.payload)
      };
      case MoviesActionTypes.REMOVE_NOMINATION:
      return {
        ...state,
        nominations: removeNominationMovie(state.nominations,action.payload)
      };
    default:
      return state;
  }
};

export default moviesReducer;