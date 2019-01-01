import React from 'react';
import './ValidationComponent.css';


const ValidationComponent = (props) => {
    
    // depending on text length, each will display a different p tag
    let displayText = null;

    if (props.textLength >= 5) {
        displayText = (
            <h4>Text is Long Enough. Click letters to delete.</h4>
        )
    } else {
        displayText = (
            <h4>Text is too short, please add more.</h4>
        )
    }

    return (
        <div className="ValidationComponent">
        {displayText}
        </div>
    )
};

export default ValidationComponent;