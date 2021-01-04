import SidebarActionTypes from './sidebar.types';

 export const toggleSidebar = () => ({
  type: SidebarActionTypes.TOGGLE_SIDEBAR
});

export const openNominations = () => ({
  type: SidebarActionTypes.OPEN_NOMINATIONS
});


export const closeNominations = () => ({
  type: SidebarActionTypes.CLOSE_NOMINATIONS
});



