import { createStore, combineReducers } from 'redux'

import counterReducer from './modules/counter'
import nameReducer from './modules/name'


const rootReducer = combineReducers({
    counter:counterReducer,
    name:nameReducer
});

export default createStore(rootReducer);
