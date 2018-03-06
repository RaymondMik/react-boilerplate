import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './store';
import { AppContainer } from 'react-hot-loader';
import Base from './components/Base';

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

renderApp(Base);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Base', () => {
        const NextBaseComponent = require('./components/Base').default;
        renderApp(NextBaseComponent);
    });
}