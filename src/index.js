import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './store';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const store = initStore();

/**
 * Render React application
 */
const renderApp = (BaseComponent) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <BaseComponent />
            </ Provider>
        </ AppContainer>,
        document.getElementById('application'));
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextBaseComponent = require('./components/App').default;
        renderApp(NextBaseComponent);
    });
}