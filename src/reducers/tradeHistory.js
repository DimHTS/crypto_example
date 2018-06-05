import {
  GET__TRADE_HISTORY__LOADING,
  GET__TRADE_HISTORY__SUCCESS,
  GET__TRADE_HISTORY__ERROR
} from '../actions/tradeHistory'


const initialState = {
  loading: false,
  error: false,
  data: []
};


export default function tradeHistory(state = initialState, action) {
  switch (action.type) {
    case GET__TRADE_HISTORY__LOADING:
      return {
        loading: true,
        error: false,
        data: []
      };

    case GET__TRADE_HISTORY__SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.data
      };

    case GET__TRADE_HISTORY__ERROR:
      return {
        loading: false,
        error: true,
        data: []
      };

    default:
      return state;
  }
}
