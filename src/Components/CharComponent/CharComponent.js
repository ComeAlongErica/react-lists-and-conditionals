import React from 'react';
import './CharComponent.css';


const CharComponent = (props) => {

    return (
        <div onClick={props.click} className="CharComponent">
            <h2> {props.displayChar} </h2>
        </div>
    )
};

export default CharComponent;