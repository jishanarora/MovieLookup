import MoviesActionTypes from './movies.types';


export const addMovies = item => ({
 type:MoviesActionTypes.UPDATE_LIST,
 payload:item
})

export const emptyMovies=()=> ({
  type:MoviesActionTypes.EMPTY_MOVIES,
 })
 

export const updateSearch= searchString=>({
  type:MoviesActionTypes.UPDATE_SEARCH,
  payload: searchString
})

export const addNomination = item => ({
  type:MoviesActionTypes.ADD_NOMINATION,
  payload:item
 })
 
 export const removeNomination = item => ({
   type:MoviesActionTypes.REMOVE_NOMINATION,
   payload:item
  })

  export const setNominations = item => ({
    type:MoviesActionTypes.SET_NOMINATIONS,
    payload:item
   })