import * as types from '../../constants/ActionTypes'


const initialState = {
  loading: false,
  error: false,
  currencies: []
}


export default function tiker(state = initialState, action) {
  switch (action.type) {
    case types.GET__TIKER__LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };

    case types.GET__TIKER__SUCCESS:
      return {
        loading: false,
        error: false,
        currencies: action.currencies
      };

    case types.GET__TIKER__ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}
