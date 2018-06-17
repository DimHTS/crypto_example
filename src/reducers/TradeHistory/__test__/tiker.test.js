import { default as reducer, initialState } from '../tiker'
import * as t from '../../../constants/ActionTypes'


describe('reducers > TradeHistory => tiker', () => {

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('loading', () => {
    const action = {
      type: t.GET__TIKER__LOADING
    }
    const value = {
      ...initialState,
      loading: true,
    }

    expect(reducer(initialState, action)).toEqual(value)
  })


  it('success', () => {
    const action = {
      type: t.GET__TIKER__SUCCESS,
      payload: [{ test: "test" }]
    }
    const value = {
      ...initialState,
      currencies: [{ test: "test" }]
    }

    expect(reducer(initialState, action)).toEqual(value)
  })


  it('error', () => {
    const action = {
      type: t.GET__TIKER__ERROR
    }
    const value = {
      ...initialState,
      error: true
    }

    expect(reducer(initialState, action)).toEqual(value)
  })

})