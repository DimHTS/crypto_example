import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


import TradeHistory from './TradeHistory/index';


export default combineReducers({
  routing: routerReducer,
  TradeHistory
})
