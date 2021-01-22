import { createStore } from 'redux'

import counterReducer from './modules/counter'
import nameReducer from './modules/name'
const reducer={counter:counterReducer,name:nameReducer}
export default createStore(reducer);
