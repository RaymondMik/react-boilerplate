import { combineReducers } from 'redux';
import cryptos from './cryptosReducer';

const reducers = combineReducers({
    cryptos
});

// selectors used in mapStateToProps()
export const getCryptos = (state) => state.cryptos;

export default reducers;