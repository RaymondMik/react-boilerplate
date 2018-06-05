/**
 *  Fetch data from REST API via HTTP request.
 * 
 * @param {string} endpoint.
 * @param {string} dataType.
 * @returns {JSON} response from API.
 */
const getData = (endpoint, dataType) => {
    return fetch(endpoint).then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }).catch( (err) => {
        throw new Error(`There was the following problem: ${err} while fetching ${dataType}`);
    });
};

export { getData };