import axios from 'axios'

import * as types from '../constants/ActionTypes'


export const onGetTradeHistory = (currencie, coin) => async dispatch => {
  dispatch({ type: types.GET__TRADE_HISTORY__LOADING })

  try {
    const start = Number(new Date().getTime() / 1000 - (60 * 60 * 24));
    const end = Number(new Date().getTime() / 1000);
    const urlConfig = 'currencyPair=' + currencie + '_' + coin + '&start=' + start + '&end=' + end;
    const url = '/public?command=returnTradeHistory&' + urlConfig;

    const dataTradeHistory = await axios.get(url).catch(error => { throw error })

    dispatch({
      type: types.GET__TRADE_HISTORY__SUCCESS,
      data: dataTradeHistory.data
    })
  } catch (error) {
    dispatch({
      type: types.GET__TRADE_HISTORY__ERROR
    })
  }
}