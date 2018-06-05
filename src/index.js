import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { initStore } from './store';
import ErrorBoundary from './components/ErrorBoundary';
import Base from './components/Base';

const store = initStore();

/**
 * Render React application
 */
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <Route path='/' component={Base} />    
            </ Router>
        </ ErrorBoundary>
    </ Provider>,
    document.getElementById('application')
);