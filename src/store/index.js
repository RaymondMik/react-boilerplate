import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger();

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

const devStoreConfig = () => {
	return store = createStore(
		reducers,
		composeEnhancers(
			applyMiddleware(
				loggerMiddleware // neat middleware that logs actions
			  )
		)
	);
};

const prodStoreConfig = () => {
	return store = createStore(
		reducers
	);
}; 

(function initStore() {
	return process.env.NODE_ENV === 'dev' ? devStoreConfig() : prodStoreConfig();
})();

export default store;