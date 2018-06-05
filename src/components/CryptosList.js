import React from 'react';
import PropTypes from 'prop-types';

const CryptosList = (props) => {

    const renderSortedCryptos = (cryptos = {}) => {
        const sortedCryptosKeys = Object.keys(cryptos).sort((a, b) => cryptos[a].rank - cryptos[b].rank);
        const getCurrencySymbol = (selectedCurrency) => {
            switch (selectedCurrency) {
                case 'EUR':
                    return '€';
                default:
                    return '$';
            }
        };

        return sortedCryptosKeys.map((crypto) => {
            const cryptoData = cryptos[crypto];
            
            return (
                <tr key={`crypto-key-${crypto}`}>
                    <td>{cryptoData.rank}</td>
                    <td>{cryptoData.symbol}</td>
                    <td>
                        <span>$</span> {cryptoData.quotes.USD.price} 
                    </td>
                    <td>{cryptoData.quotes.USD.percent_change_24h}</td>
                </tr>
            );
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>rank</th>
                    <th>symbol</th>
                    <th>price​</th>
                    <th>change 24h</th>
                </tr>
            </thead>
            <tbody>
                { renderSortedCryptos(props.cryptos) }
            </tbody>
        </table>
    );
};

CryptosList.propTypes = {
    cryptos: PropTypes.object
};

export default CryptosList;