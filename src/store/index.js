import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const loggerMiddleware = createLogger();
let store;

const devStoreConfig = () => {
	return store = createStore(
		reducers,
		composeWithDevTools(
			applyMiddleware(
				loggerMiddleware 
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