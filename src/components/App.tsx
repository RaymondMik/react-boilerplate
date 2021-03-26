import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { addText } from '../store/actions';
import '../styles/app.sass';

import { DefaultRootState } from "../../types";

const App = () => {
    const dispatch = useDispatch();
    const { text } = useSelector((state: DefaultRootState) => state);

    let textRef = useRef<HTMLInputElement | null>(null);
    const [prevText, setPrevText] = useState(null);
   
    /**
     * Render lines
     * 
     * @param {Array} textStrings - The string we want to render.
     * @returns {JSX} lines to be rendered
     */
    const renderTextLines = (textStrings: string[] = []) => {
        let textHtml = textStrings.map( (text, i) => <li className="text" key={i}>{ text }</li> );

        return (
            <ul>{ textHtml }</ul>
        );
    };

    /**
     * Handle changes in input form element
     * 
     * @fires setPrevText()
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrevText(event.target.value);
    };

    /**
     * Handle form submission
     * 
     * @fires addText() action creator
     */
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        // dispatch Redux action
        dispatch(addText(textRef.current.value));
        // reset form
        event.target.reset();
    };

    return (
        <div>
            <h2>Secret code generator 😁</h2>
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => { handleSubmit(e);}}>
                <input type="text" ref={textRef} placeholder="write some text here" onChange={(e) => { handleChange(e);}} />
                <input type="submit" value="Add" />
            </form>
            <p className="preview">{ prevText }</p>
            <h4>Previously added</h4>
            { renderTextLines(text) }
        </div>
    );
};

export default hot(App);
