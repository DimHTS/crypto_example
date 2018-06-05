import {
  GET__TIKER__LOADING,
  GET__TIKER__SUCCESS,
  GET__TIKER__ERROR
} from '../actions/tiker'


const initialState = {
  loading: false,
  error: false,
  currencies: []
}


export default function tiker(state = initialState, action) {
  switch (action.type) {
    case GET__TIKER__LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };

    case GET__TIKER__SUCCESS:
      return {
        loading: false,
        error: false,
        currencies: action.currencies
      };

    case GET__TIKER__ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}
