import tradeHistoryReducer from '../tradeHistoryReducer'
import * as types from '../../../constants/ActionTypes'

describe('reducers > TradeHistory => tradeHistoryReducer', () => {

  const initialState = {
    loading: false,
    error: false,
    data: []
  }

  it('initial state', () => {
    expect(tradeHistoryReducer(undefined, {})).toEqual(initialState)
  })

  it('loading', () => {
    expect(
      tradeHistoryReducer(initialState, { type: types.GET__TRADE_HISTORY__LOADING })
    ).toEqual({
      loading: true,
      error: false,
      data: []
    })
  })

  it('success', () => {
    expect(
      tradeHistoryReducer(initialState, {
        type: types.GET__TRADE_HISTORY__SUCCESS,
        data: ['test1', 'test2']
      })
    ).toEqual({
      loading: false,
      error: false,
      data: ['test1', 'test2']
    })
  })

  it('error', () => {
    expect(
      tradeHistoryReducer(initialState, { type: types.GET__TRADE_HISTORY__ERROR })
    ).toEqual({
      loading: false,
      error: true,
      data: []
    })
  })

})