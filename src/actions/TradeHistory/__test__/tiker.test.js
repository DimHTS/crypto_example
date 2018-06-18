import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as actions from '../tiker'
import * as t from '../../../constants/ActionTypes'
import findCurrenciesAndCoins from '../../../helpers/TradeHistory/findCurrenciesAndCoins'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const message = {
  "BTC_BCN":
  {
    "id": 7,
    "last": "0.00000061",
    "lowestAsk": "0.00000061",
    "highestBid": "0.00000060",
    "percentChange": "-0.06153846",
    "baseVolume": "40.95174296",
    "quoteVolume": "66483913.08003294",
    "isFrozen": "0",
    "high24hr": "0.00000065",
    "low24hr": "0.00000059"
  },
  "BTC_BLK": { "...": "..." }
}


describe('mocking axios requests', function () {

  beforeEach(function () { moxios.install() })
  afterEach(function () { moxios.uninstall() })


  it('request all currencies and coins', () => {

    moxios.stubRequest('/public?command=returnTicker', {
      status: 200,
      response: { message }
    })

    // moxios.stubRequest - alternative: 
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: { message },
    //   })
    // })

    const expectedActions = [
      { type: t.GET__TIKER__LOADING },
      { type: t.GET__TIKER__SUCCESS, payload: findCurrenciesAndCoins({ message }) },
    ]
    const store = mockStore({})
    return store.dispatch(actions.onGetTiker())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })

})
