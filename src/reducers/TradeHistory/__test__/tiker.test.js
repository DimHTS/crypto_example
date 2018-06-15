import tiker from '../tiker'
import * as types from '../../../constants/ActionTypes'


describe('reducers > TradeHistory => tiker', () => {

  const initialState = {
    loading: false,
    error: false,
    currencies: []
  }

  it('initial state', () => {
    const action = tiker(undefined, {})
    expect(action).toEqual(initialState)
  })

  it('loading', () => {
    const action = tiker(initialState, { type: types.GET__TIKER__LOADING })
    const value = {
      loading: true,
      error: false,
      currencies: []
    }

    expect(action).toEqual(value)
  })


  it('success', () => {
    const action = tiker(
      initialState,
      {
        type: types.GET__TIKER__SUCCESS,
        currencies: []
      }
    )
    const value = {
      loading: false,
      error: false,
      currencies: []
    }

    expect(action).toEqual(value)
  })


  it('error', () => {
    const action = tiker(initialState, { type: types.GET__TIKER__ERROR })
    const value = {
      loading: false,
      error: true,
      currencies: []
    }

    expect(action).toEqual(value)
  })

})