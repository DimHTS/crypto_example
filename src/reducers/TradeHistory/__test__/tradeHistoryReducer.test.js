import { default as reducer, initialState } from '../tradeHistoryReducer'
import * as t from '../../../constants/ActionTypes'

describe('reducers > TradeHistory => tradeHistoryReducer', () => {

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('loading', () => {
    const action = {
      type: t.GET__TRADE_HISTORY__LOADING
    }
    const value = {
      ...initialState,
      loading: true
    }

    expect(reducer(initialState, action)).toEqual(value)
  })

  it('success', () => {
    const action = {
      type: t.GET__TRADE_HISTORY__SUCCESS,
      payload: [{ test: "test" }]
    }
    const value = {
      ...initialState,
      data: [{ test: "test" }]
    }

    expect(reducer(initialState, action)).toEqual(value)
  })

  it('error', () => {
    const action = {
      type: t.GET__TRADE_HISTORY__ERROR
    }
    const value = {
      ...initialState,
      error: true
    }

    expect(reducer(initialState, action)).toEqual(value)
  })

})