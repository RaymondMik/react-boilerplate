import * as React from 'react';

const App = (props) => {
   
    const renderTextLines = () => {
        let linesHtml = props.text.map( (text, i) => {
            return (
                <p className="results" key={i}>{ text }</p>
            );
        });

        return linesHtml;
    };

    return (
        <div>
            <h2>Write random objects! 😁</h2>
            <input type="text" />
            { renderTextLines() }
        </div>
    );
};

export default App;