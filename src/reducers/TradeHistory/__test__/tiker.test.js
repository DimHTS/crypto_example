import tiker from '../tiker'
import * as types from '../../../constants/ActionTypes'


describe('reducers > TradeHistory => tiker', () => {

  const initialState = {
    loading: false,
    error: false,
    currencies: []
  }

  it('initial state', () => {
    expect(tiker(undefined, {})).toEqual(initialState)
  })

  it('loading', () => {
    expect(
      tiker(initialState, { type: types.GET__TIKER__LOADING })
    ).toEqual({
      loading: true,
      error: false,
      currencies: []
    })
  })

  it('success', () => {
    expect(
      tiker(initialState, {
        type: types.GET__TIKER__SUCCESS,
        currencies: ['test1', 'test2']
      })
    ).toEqual({
      loading: false,
      error: false,
      currencies: ['test1', 'test2']
    })
  })

  it('error', () => {
    expect(
      tiker(initialState, { type: types.GET__TIKER__ERROR })
    ).toEqual({
      loading: false,
      error: true,
      currencies: []
    })
  })

})