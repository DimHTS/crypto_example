import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as actions from '../tradeHistory'
import * as t from '../../../constants/ActionTypes'
import createUrlTradeHistory from '../../../helpers/TradeHistory/createUrlTradeHistory'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const message = [
  {
    "globalTradeID": 2036467,
    "tradeID": 21387,
    "date": "2014-09-12 05:21:26",
    "type": "buy",
    "rate": "0.00008943",
    "amount": "1.27241180",
    "total": "0.00011379"
  },
  { "...": "..." }
]
const currencie = 'BTC'
const coin = 'NXT'

describe('mocking axios requests history of a currency pair', function () {

  beforeEach(function () { moxios.install() })
  afterEach(function () { moxios.uninstall() })


  it('request trade history ', () => {

    const url = createUrlTradeHistory(currencie, coin);
    moxios.stubRequest(url, {
      status: 200,
      response: { message }
    })

    const expectedActions = [
      { type: t.GET__TRADE_HISTORY__LOADING },
      { type: t.GET__TRADE_HISTORY__SUCCESS, payload: { message } },
    ]
    const store = mockStore({})
    return store.dispatch(actions.onGetTradeHistory(currencie, coin))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })

})
