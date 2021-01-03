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
