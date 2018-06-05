import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, NavLink, Switch } from 'react-router-dom';
import CryptosList from './CryptosList';
import PropTypes from 'prop-types';
import Settings from './Settings';
import '../assets/styles/app.scss';

/**
 * Application component
 */
const App = (props) => {
    // Render Loader
    if (props.cryptos.isFetching) {
        return (
            <div>
                <h3>...Loading</h3>
            </div>
        );
    }

    // Render ErrorBoundary via componentDidCatch()
    if (props.cryptos.errors) {
        throw new Error('Something went wrong while fetching API data!');
    }

    const cryptos = props.cryptos.items.data;
    
    return (
        <div>
            <h2>Crypto Currency App</h2>
            <header>
                <NavLink to={'/'} activeClassName='selected'>Home</NavLink>
                <NavLink to={'/settings'} activeClassName='selected'>Settings</NavLink>
            </header>
            <Switch>
                <Route path='/' exact render={(props) => (
                    <CryptosList {...props}
                        cryptos={cryptos}
                    />
                )} />
                <Route path='/settings' component={Settings} />
            </ Switch>
        </div>
    );
};

App.propTypes = {
    cryptos: PropTypes.object
};

export default hot(module)(App);

