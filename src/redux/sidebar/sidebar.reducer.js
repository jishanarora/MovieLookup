import SidebarActionTypes from './sidebar.types';

const INITIAL_STATE = {
  hidden: true,
  showModal: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        hidden: !state.hidden
      };
      case SidebarActionTypes.OPEN_NOMINATIONS:
      return {
        ...state,
        showModal: true
      };
      case SidebarActionTypes.CLOSE_NOMINATIONS:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
};

export default sidebarReducer;