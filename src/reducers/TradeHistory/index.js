import { combineReducers } from 'redux'

import tiker from './tiker';
import tradeHistory from './tradeHistoryReducer';

export default combineReducers({
  tiker,
  tradeHistory
})
