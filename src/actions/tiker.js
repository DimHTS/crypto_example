import axios from 'axios'

import findCurrenciesAndCoins from '../helpers/actions/findCurrenciesAndCoins'


export const GET__TIKER__LOADING = 'GET__TIKER__LOADING'
export const GET__TIKER__SUCCESS = 'GET__TIKER__SUCCESS'
export const GET__TIKER__ERROR = 'GET__TIKER__ERROR'


export const onGetTiker = () => async dispatch => {
  dispatch({ type: GET__TIKER__LOADING })

  try {
    const tiker = await axios.get('/public?command=returnTicker').catch(error => { throw error })

    dispatch({
      type: GET__TIKER__SUCCESS,
      currencies: findCurrenciesAndCoins(tiker.data)
    })
  } catch (error) {
    dispatch({
      type: GET__TIKER__ERROR
    })
  }
}

