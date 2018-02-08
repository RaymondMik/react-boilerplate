/**
 * Add text action creator
 * 
 * @param {String} text
 * @returns {Object} 
 */
export const addText = (text) => {
    return {
        type: ADD_TEXT,
        text
    };
};

export const ADD_TEXT = 'ADD_TEXT';