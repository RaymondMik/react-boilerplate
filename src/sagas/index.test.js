import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getData } from '../services';
import { getCryptosSaga } from './index';

describe('Sagas tests', () => {
    describe('Get Cryptos Success Path', () => {
        const saga = getCryptosSaga();
        let output = null;

        test('should dispatch GET_CRYPTOS action', () => {
            output = saga.next().value;
            const expected = put(actions.getCryptos());
    
            expect(output).toEqual(expected);
        });

        test('should call getData()', () => {
            output = saga.next().value;
            const expected = call(getData, 'https://api.coinmarketcap.com/v2/ticker/?convert=EUR&sort=id', 'cryptos');
       
            expect(output).toEqual(expected);
        });

        test('should dispatch GET_CRYPTOS_SUCCESS action', () => {
            const cryptos = {};
            output = saga.next(cryptos).value;
            const expected = put(actions.getCryptosSuccess(cryptos));
            
            expect(output).toEqual(expected);
        });

    });

    describe('Get Cryptos Error Path', () => {
        const saga = getCryptosSaga();
        let output = null;

        // dispatch GET_CRYPTOS action
        saga.next();

        test('should dispatch GET_CRYPTOS action', () => {
            const error = new Error('network call failure');
            output = saga.throw(error).value;
            const expected = put(actions.getCryptosFailure(error));
    
            expect(output).toEqual(expected);
        });
    });
});