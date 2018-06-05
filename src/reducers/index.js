import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import tiker from './tiker';
import tradeHistory from './tradeHistory';

export default combineReducers({
  routing: routerReducer,
  tiker,
  tradeHistory
})
