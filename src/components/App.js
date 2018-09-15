import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import '../styles/app.sass';

/**
 * Base React component of the application
 */
class App extends React.Component {
    constructor() {
        super();
        this.textRef;

        this.state = {
            previewText: null
        };
    }
   
    /**
     * Render lines
     * 
     * @param {Array} textStrings - The string we want to render.
     * @returns {JSX} lines to be rendered
     */
    renderTextLines(textStrings = []) {
        let textHtml = textStrings.map( (text, i) => <li className="text" key={i}>{ text }</li> );

        return (
            <ul>{ textHtml }</ul>
        );
    }

    /**
     * Handle changes in input form element
     * 
     * @fires setState()
     */
    handleChange(event) {
        this.setState({
            previewText: event.target.value
        });
    }

    /**
     * Handle form submission
     * 
     * @fires addText() action creator
     */
    handleSubmit(event) {
        event.preventDefault();
        const text = this.textRef;
        // dispatch Redux action
        this.props.addText(text.value);
        // reset form
        event.target.reset();
    }

    render() {
        return (
            <div>
                <h2>Secret code generator 😁</h2>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" ref={(el) => this.textRef = el} placeholder="write some text here" onChange={ this.handleChange.bind(this) } />
                    <input type="submit" value="Add" />
                </form>
                <p className="preview">{ this.state.previewText }</p>
                <h4>Previously added</h4>
                { this.renderTextLines(this.props.text) }
            </div>
        );
    }
    
}

App.propTypes = {
	text: PropTypes.array,
    addText: PropTypes.func
};

export default hot(module)(App);

