import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import collectionItemsReducer from './collection-items/collection-items.reducer';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer= combineReducers({
    user:userReducer,
    sidebar:sidebarReducer,
    itemCollection: collectionItemsReducer

});
export default persistReducer(persistConfig,rootReducer);