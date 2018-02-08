import * as React from 'react';
import PropTypes from 'prop-types';

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

    handleChange(event) {
        this.setState({
            previewText: event.target.value
        });
    }

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

export default App;