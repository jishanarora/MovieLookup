import {createSelector} from 'reselect';

const selectVariables = state => state.variables;

export const selectHomepageVideoUrl= createSelector(
[selectVariables],
(variables)=> variables.homepageVideoUrl
);