import { 
    GET_CRYPTOS,
    GET_CRYPTOS_SUCCESS,
    GET_CRYPTOS_FAILURE  } from '../actions/index';

const initialState = {
    isFetching: true,
    errors: false,
    items: {}
};

/**
 * Get cryptos.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const cryptos = (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTOS:
            return {
                ...state,
                isFetching: true,
                errors: false
            };
        case GET_CRYPTOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errors: false,
                items: action.cryptos,
                receivedAt: action.receivedAt
            };
        case GET_CRYPTOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: action.errors,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
};

export default cryptos;