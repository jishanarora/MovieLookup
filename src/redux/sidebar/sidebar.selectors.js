import {createSelector} from 'reselect';

const selectSidebar = state =>state.sidebar;

export const selectCartHidden= createSelector(
    [selectSidebar],
    sidebar=>sidebar.hidden
);

