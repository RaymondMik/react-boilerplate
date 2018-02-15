import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as React from 'react';
import PropTypes from 'prop-types';
import '../styles/app.sass';

/**
 * Make the Redux store available via props to the React application.
 * @param {Object} state - The Redux Store state.
 * @returns {Object} props for the React application.
 */
const mapStateToProps = (state)  => {
    return {
        text: state.text
    };
};

/**
 * Wrap Redux Actions into a dispatch call so they may be invoked directly in the React app.
 * @param {Function} dispatch - The Redux Store dispatch method.
 * @returns {Object} action creators wrapped into a dispatch().
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

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
   
    renderTextLines() {
        const textStrings = this.props.text;
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

        this.props.addText(text.value);
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
                { this.renderTextLines() }
            </div>
        );
    }
    
}

App.propTypes = {
	text: PropTypes.array,
    addText: PropTypes.func
};

/**
 * Connect Redux state and actions to the React application.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);