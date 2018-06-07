import axios from 'axios'

import * as types from '../constants/ActionTypes'
import findCurrenciesAndCoins from '../helpers/TradeHistory/findCurrenciesAndCoins'


export const onGetTiker = () => async dispatch => {
  dispatch({ type: types.GET__TIKER__LOADING })

  try {
    const tiker = await axios.get('/public?command=returnTicker').catch(error => { throw error })

    dispatch({
      type: types.GET__TIKER__SUCCESS,
      currencies: findCurrenciesAndCoins(tiker.data)
    })
  } catch (error) {
    dispatch({
      type: types.GET__TIKER__ERROR
    })
  }
}

