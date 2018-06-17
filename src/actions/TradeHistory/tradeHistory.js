import axios from 'axios'

import * as t from '../../constants/ActionTypes'
import createUrlTradeHistory from '../../helpers/TradeHistory/createUrlTradeHistory'
import throwDataError from '../../helpers/TradeHistory/throwDataError'


export const onGetTradeHistory = (currencie, coin) => async dispatch => {
  dispatch({ type: t.GET__TRADE_HISTORY__LOADING })

  try {
    const url = createUrlTradeHistory(currencie, coin);
    const dataTradeHistory = await axios.get(url).catch(error => { throw error })
    throwDataError(dataTradeHistory)

    dispatch({
      type: t.GET__TRADE_HISTORY__SUCCESS,
      payload: dataTradeHistory.data
    })
  } catch (error) {
    dispatch({
      type: t.GET__TRADE_HISTORY__ERROR
    })
  }
}