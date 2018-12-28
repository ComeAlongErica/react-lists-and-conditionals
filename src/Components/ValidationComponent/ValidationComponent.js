import React from 'react';
import './ValidationComponent.css';


const ValidationComponent = (props) => {
    
    // depending on text length, each will display a different p tag
    let displayText = null;

    if (props.textLength >= 5) {
        displayText = (
            <p>Text Long Enough</p>
        )
    } else {
        displayText = (
            <p>Text too short</p>
        )
    }

    return (
        <div className="ValidationComponent">
        {displayText}
        </div>
    )
};

export default ValidationComponent;