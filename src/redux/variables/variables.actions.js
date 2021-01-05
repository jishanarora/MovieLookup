import {variablesActionTypes} from './variables.types'

export const setHomepageVideoUrl= url=>({
    type: variablesActionTypes.SET_HOMEPAGE_VIDEO_URL,
    payload: url
});