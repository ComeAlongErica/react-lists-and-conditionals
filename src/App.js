import React, { Component } from 'react';
import './App.css';
import ValidationComp from './Components/ValidationComponent/ValidationComponent' //imports person component
import CharComponent from './Components/CharComponent/CharComponent'

class App extends Component {

  state = {
    inputLength: 0,
    characters: [],
  }

  updateHandler = (event) => {
    // create copy of state
    const inputLengthCopy = [...this.state.inputLength];
    const inputCharCopy = [...this.state.characters];
    //put length in var
    const newValue = event.target.value;
    // edit the copy
    inputLengthCopy.splice(0 , 1, newValue.length);    
    inputCharCopy.splice(0 , 1, newValue);        
    // set state with copy    
    this.setState( {inputLength: inputLengthCopy, characters: inputCharCopy} )        
  }

  render() {

    return (
      <section>
        <input type="text" onChange={this.updateHandler.bind()} />
        <p>{this.state.inputLength}</p>
        <ValidationComp textLength={this.state.inputLength}/>
        <CharComponent displayChar={this.state.characters}/>
      </section>
    );
  }
}

export default App;

