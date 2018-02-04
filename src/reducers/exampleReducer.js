import { ADD_TEXT } from '../actions';

const exampleReducer = (state = {text: 'pupu'}, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return { ...state, ...action.text };
        default:
            return state;
    }
};

export default exampleReducer;