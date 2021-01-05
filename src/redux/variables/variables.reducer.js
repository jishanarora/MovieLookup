import {variablesActionTypes} from './variables.types';
const INITIAL_STATE = {
    homepageVideoUrl: ""
}

const variablesReducer = (state = INITIAL_STATE, action) =>
{
   switch(action.type)
   {
       case variablesActionTypes.SET_HOMEPAGE_VIDEO_URL:
           return{
            ...state,
            homepageVideoUrl: action.payload
           }

        default:
            return state;
   }
}

export default variablesReducer;