import * as React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            previewText: null
        };
    }
   
    renderTextLines() {
        let linesHtml = this.props.text.map( (text, i) => <li className="text" key={i}>{ text }</li> );

        return (
            <ul>{ linesHtml }</ul>
        );
    }

    handleChange(event) {
        this.setState({
            previewText: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const text = this.refs.typedText.value;

        this.props.addText(text);
    }

    render() {
        return (
            <div>
                <h2>Secret code generator 😁</h2>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" ref="typedText" placeholder="write some text here" onChange={ this.handleChange.bind(this) } />
                    <input type="submit" value="Add" />
                </form>
                <p className="preview">{ this.state.previewText }</p>
                <h4>Previously added</h4>
                { this.renderTextLines() }
            </div>
        );
    }
    
}

export default App;