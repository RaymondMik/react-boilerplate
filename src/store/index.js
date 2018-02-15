import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const loggerMiddleware = createLogger();

/**
 * Configuration for the development store
 * @returns {Object} Redux store.
 */
const createDevStore = () => {
	const store = createStore(
		reducers,
		composeWithDevTools(
			applyMiddleware(
				loggerMiddleware 
			)
		)
	);

	// Webpack Hot Module Replacement API
	if (module.hot) {
		module.hot.accept('../reducers', () => {
		  const nextReducers = require('../reducers').default;
		  store.replaceReducer(nextReducers);
		});
	}

	return store;
};

/**
 * Configuration for the production store
 * @returns {Object} Redux store.
 */
const createProdStore = () => {
	const store = createStore(
		reducers
	);

	return store;
}; 

/**
 * Initialize the store
 * @returns {Object} Redux store.
 */
const initStore = () => {
	return process.env.NODE_ENV === 'development' ? createDevStore() : createProdStore();
};

export default initStore;