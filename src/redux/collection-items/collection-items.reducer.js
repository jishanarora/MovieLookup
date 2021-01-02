import {collectionItemsActionTypes} from './collection-items.types'
const INITIAL_STATE=
{
   collectionItemsData: null
}


const collectionItemsReducer = (state=INITIAL_STATE,action)=>{
    switch(action){

      case collectionItemsActionTypes.UPDATE_LIST:
        return{
         ...state,
         collectionItemsData: action.payload
        }
        default:
            return state;
    }
} 

export default collectionItemsReducer;
