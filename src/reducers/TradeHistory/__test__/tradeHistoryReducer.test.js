import tradeHistoryReducer from '../tradeHistoryReducer'
import * as types from '../../../constants/ActionTypes'

describe('reducers > TradeHistory => tradeHistoryReducer', () => {

  const initialState = {
    loading: false,
    error: false,
    data: []
  }

  it('initial state', () => {
    const action = tradeHistoryReducer(undefined, {})
    expect(action).toEqual(initialState)
  })

  it('loading', () => {
    const action = tradeHistoryReducer(initialState, { type: types.GET__TRADE_HISTORY__LOADING })
    const value = {
      loading: true,
      error: false,
      data: []
    }

    expect(action).toEqual(value)
  })

  it('success', () => {
    const action = tradeHistoryReducer(
      initialState,
      {
        type: types.GET__TRADE_HISTORY__SUCCESS,
        data: []
      }
    )
    const value = {
      loading: false,
      error: false,
      data: []
    }

    expect(action).toEqual(value)
  })

  it('error', () => {
    const action = tradeHistoryReducer(initialState, { type: types.GET__TRADE_HISTORY__ERROR })
    const value = {
      loading: false,
      error: true,
      data: []
    }

    expect(action).toEqual(value)
  })

})