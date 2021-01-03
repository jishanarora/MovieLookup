import MoviesActionTypes from './movies.types';


export const addMovies = item => ({
 type:MoviesActionTypes.UPDATE_LIST,
 payload:item
})

export const updateSearch= searchString=>({
  type:MoviesActionTypes.UPDATE_SEARCH,
  payload: searchString
})