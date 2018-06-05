import { initStore, store } from './index';
import { getCryptosSuccess } from '../actions';
import * as mockData from '../assets/mocks/mockCryptoData.json';

beforeEach(() => {
    initStore();
});

describe('Store integrated tests', () => {
    describe('By default the store should', () => {
        test('not contain any cryptos', () => {
            const state = store.getState();
            expect(Object.keys(state.cryptos.items).length).toBe(0);
        });

    });

    describe('After dispatching "GET_CRYPTOS_SUCCESS"', () => {
        test('Items should have been added to the store', () => {
            const initialState = store.getState();
            store.dispatch(getCryptosSuccess(mockData));
            const finalState = store.getState();
            expect(Object.keys(initialState.cryptos.items).length).toBeLessThan(Object.keys(finalState.cryptos.items).length);
        });

        test('Cryptos in mockData should be now contained into the store', () => {
            store.dispatch(getCryptosSuccess(mockData));
            const state = store.getState();
            expect(state.cryptos.items.data[1]).toEqual(mockData.data[1]);
        });
    });
});