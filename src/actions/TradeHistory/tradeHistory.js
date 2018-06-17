import axios from 'axios'

import * as types from '../../constants/ActionTypes'
import createUrlTradeHistory from '../../helpers/TradeHistory/createUrlTradeHistory'
import throwDataError from '../../helpers/TradeHistory/throwDataError'


export const onGetTradeHistory = (currencie, coin) => async dispatch => {
  dispatch({ type: types.GET__TRADE_HISTORY__LOADING })

  try {
    const url = createUrlTradeHistory(currencie, coin);
    const dataTradeHistory = await axios.get(url).catch(error => { throw error })
    throwDataError(dataTradeHistory)

    dispatch({
      type: types.GET__TRADE_HISTORY__SUCCESS,
      payload: dataTradeHistory.data
    })
  } catch (error) {
    dispatch({
      type: types.GET__TRADE_HISTORY__ERROR
    })
  }
}