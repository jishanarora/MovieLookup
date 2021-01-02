import {collectionItemsActionTypes} from './collection-items.types'
export const setCurrentUser= list=>({
    type: collectionItemsActionTypes.UPDATE_LIST,
    payload: list
});