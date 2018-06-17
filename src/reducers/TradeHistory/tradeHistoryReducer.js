import * as t from '../../constants/ActionTypes'


export const initialState = {
  loading: false,
  error: false,
  data: []
};


export default function tradeHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case t.GET__TRADE_HISTORY__LOADING:
      return {
        ...initialState,
        loading: true
      };

    case t.GET__TRADE_HISTORY__SUCCESS:
      return {
        ...initialState,
        data: action.payload
      };

    case t.GET__TRADE_HISTORY__ERROR:
      return {
        ...initialState,
        error: true
      };

    default:
      return state;
  }
}
