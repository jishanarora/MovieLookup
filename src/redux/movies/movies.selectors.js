import {createSelector} from 'reselect';

const selectMovies = state =>state.movies;

export const selectMoviesList = createSelector(
    [selectMovies],
    movies=> movies.movieList
);

export const selectSearchField= createSelector(
    [selectMovies],
    movies=>movies.searchField
)

export const selectNominationsList = createSelector(
    [selectMovies],
    movies=> movies.nominations
);

export const selectNominationsCount= createSelector(
    [selectNominationsList],
    nominations=>nominations.reduce((totalQuantity)=> totalQuantity+1,0)
);

export const selectIfNominated=(movie)=>createSelector(
    [selectNominationsList],
    nominations=>(nominations.indexOf(movie)>-1)
);



