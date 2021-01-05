import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import moviesReducer from './movies/movies.reducer'
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import variablesReducer from './variables/variables.reducer'

const persistConfig={
    key: 'root',
    storage,
    whitelist: ['movies']
}

const rootReducer= combineReducers({
    user:userReducer,
    sidebar:sidebarReducer,
    movies: moviesReducer,
    variables: variablesReducer

});
export default persistReducer(persistConfig,rootReducer);