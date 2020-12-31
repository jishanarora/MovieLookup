import CartActionTypes from './sidebar.types';

const INITIAL_STATE = {
  hidden: true,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default sidebarReducer;