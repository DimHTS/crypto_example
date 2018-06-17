import axios from 'axios'

import * as t from '../../constants/ActionTypes'
import findCurrenciesAndCoins from '../../helpers/TradeHistory/findCurrenciesAndCoins'
import throwDataError from '../../helpers/TradeHistory/throwDataError'


export const onGetTiker = () => async dispatch => {
  dispatch({ type: t.GET__TIKER__LOADING })

  try {
    const tiker = await axios.get('/public?command=returnTicker').catch(error => { throw error })
    throwDataError(tiker)

    dispatch({
      type: t.GET__TIKER__SUCCESS,
      payload: findCurrenciesAndCoins(tiker.data)
    })
  } catch (error) {
    dispatch({
      type: t.GET__TIKER__ERROR
    })
  }
}

