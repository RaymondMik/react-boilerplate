export const GET_CRYPTOS = 'GET_CRYPTOS';
export const GET_CRYPTOS_SUCCESS = 'GET_CRYPTOS_SUCCESS';
export const GET_CRYPTOS_FAILURE = 'GET_CRYPTOS_FAILURE';
export const SELECT_CURRENCY = 'SELECT_CURRENCY';

/**
 * Get Cryptocurrencies.
 * 
 * @returns {Object} action.
 */
export const getCryptos = () => {
    return {
        type: GET_CRYPTOS,
        sentAt: Date.now()
    };
};

/**
 *  Cryptocurrencies successfully received.
 * 
 * @param {Object} cryptos.
 * @returns {Object} action.
 */
export const getCryptosSuccess = (cryptos) => {
    return {
        type: GET_CRYPTOS_SUCCESS,
        cryptos,
        receivedAt: Date.now()
    };
};

/**
 * Failed to get crypots.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const getCryptosFailure = (errors) => {
    return {
        type: GET_CRYPTOS_FAILURE,
        errors,
        receivedAt: Date.now()
    };
};