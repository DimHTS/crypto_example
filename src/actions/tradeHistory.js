import axios from 'axios'


export const GET__TRADE_HISTORY__LOADING = 'GET__TRADE_HISTORY__LOADING'
export const GET__TRADE_HISTORY__SUCCESS = 'GET__TRADE_HISTORY__SUCCESS'
export const GET__TRADE_HISTORY__ERROR = 'GET__TRADE_HISTORY__ERROR'


export const onGetTradeHistory = (currencie, coin) => async dispatch => {
  dispatch({ type: GET__TRADE_HISTORY__LOADING })

  try {
    const start = Number(new Date().getTime() / 1000 - (60 * 60 * 24));
    const end = Number(new Date().getTime() / 1000);
    const urlConfig = 'currencyPair=' + currencie + '_' + coin + '&start=' + start + '&end=' + end;
    const url = '/public?command=returnTradeHistory&' + urlConfig;

    const dataTradeHistory = await axios.get(url).catch(error => { throw error })

    dispatch({
      type: GET__TRADE_HISTORY__SUCCESS,
      data: dataTradeHistory.data
    })
  } catch (error) {
    dispatch({
      type: GET__TRADE_HISTORY__ERROR
    })
  }
}