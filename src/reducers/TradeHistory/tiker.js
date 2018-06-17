import * as t from '../../constants/ActionTypes'


export const initialState = {
  loading: false,
  error: false,
  currencies: []
}


export default function tiker(state = initialState, action) {
  switch (action.type) {
    case t.GET__TIKER__LOADING:
      return {
        ...initialState,
        loading: true
      };

    case t.GET__TIKER__SUCCESS:
      return {
        ...initialState,
        currencies: action.payload
      };

    case t.GET__TIKER__ERROR:
      return {
        ...initialState,
        error: true
      };

    default:
      return state;
  }
}
