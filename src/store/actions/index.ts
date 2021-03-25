/**
 * Add text action creator
 * 
 * @param {String} text
 * @returns {Object} 
 */
export const addText = (text: string) => {
    return {
        type: ADD_TEXT,
        text
    };
};

export const ADD_TEXT = 'ADD_TEXT';