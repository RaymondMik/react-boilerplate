import * as React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actionCreators from './actions';
import store from './store';
import './styles/app.sass';
import App from './components/App';

/**
 * Make the Redux store available via props on the for the React application.
 * @param {Object} state - The Redux Store state.
 * @returns {Object} props for the React application.
 */
const mapStateToProps = (state)  => {
    return {
        text: state.text
    };
};

/**
 * Wrap Redux Actions into a dispatch call so they may be invoked directly in the React app.
 * @param {Function} dispatch - The Redux Store dispatch method.
 * @returns {Object} action creators wrapped into a dispatch().
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

/**
 * Connect Redux state and actions to the React application.
 */
const BaseComponent = connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * Render React application
 */
render(
	(<Provider store={store}>
        <BaseComponent />
	</Provider>),
	document.getElementById('application'));
