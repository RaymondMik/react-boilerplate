import { call, put } from 'redux-saga/effects';
import { getData } from '../services';
import * as actions from '../actions';

export function* getCryptosSaga() {
    try {
        yield put(actions.getCryptos());
        const cryptos = yield call(getData, 'https://api.coinmarketcap.com/v2/ticker/?convert=EUR&sort=id', 'cryptos');
        yield put(actions.getCryptosSuccess(cryptos));
    } catch(error) {
        yield put(actions.getCryptosFailure(error));
    }
}

// Sagas that will be called when the store is initialised
function* rootSaga() {
    yield getCryptosSaga();
}

export default rootSaga;