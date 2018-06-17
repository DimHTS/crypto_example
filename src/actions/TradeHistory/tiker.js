import axios from 'axios'

import * as types from '../../constants/ActionTypes'
import findCurrenciesAndCoins from '../../helpers/TradeHistory/findCurrenciesAndCoins'
import throwDataError from '../../helpers/TradeHistory/throwDataError'


export const onGetTiker = () => async dispatch => {
  dispatch({ type: types.GET__TIKER__LOADING })

  try {
    const tiker = await axios.get('/public?command=returnTicker').catch(error => { throw error })
    throwDataError(tiker)

    dispatch({
      type: types.GET__TIKER__SUCCESS,
      payload: findCurrenciesAndCoins(tiker.data)
    })
  } catch (error) {
    dispatch({
      type: types.GET__TIKER__ERROR
    })
  }
}

