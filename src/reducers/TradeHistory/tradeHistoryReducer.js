import * as types from '../../constants/ActionTypes'


const initialState = {
  loading: false,
  error: false,
  data: []
};


export default function tradeHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET__TRADE_HISTORY__LOADING:
      return {
        loading: true,
        error: false,
        data: []
      };

    case types.GET__TRADE_HISTORY__SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.data
      };

    case types.GET__TRADE_HISTORY__ERROR:
      return {
        loading: false,
        error: true,
        data: []
      };

    default:
      return state;
  }
}
