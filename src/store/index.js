import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const loggerMiddleware = createLogger();
let store;

/**
 * Configuration for the development Store
 * @returns {Object} Redux store.
 */
const createDevStore = () => {
	return store = createStore(
		reducers,
		composeWithDevTools(
			applyMiddleware(
				loggerMiddleware 
			)
		)
	);
};

/**
 * Configuration for the production Store
 * @returns {Object} Redux store.
 */
const createProdStore = () => {
	return store = createStore(
		reducers
	);
}; 


(function initStore() {
	/*eslint no-undef: "error"*/
	return process.env.NODE_ENV === 'development' ? createDevStore() : createProdStore();
})();

export default store;