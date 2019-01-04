import React, { Component } from 'react';
import './App.css';
import ValidationComp from './Components/ValidationComponent/ValidationComponent' //imports person component
import CharComponent from './Components/CharComponent/CharComponent'

class App extends Component {

  state = {
    inputLength: [0],
    characters: [],
  }

  updateHandler = (event) => {
    // create copy of state
    const inputLengthCopy = [...this.state.inputLength];
    const inputCharCopy = [...this.state.characters];
    //put length in var
    const newValue = event.target.value;
    // edit the copy
    inputLengthCopy.splice(0, 1, newValue.length);
    inputCharCopy.splice(0, 1, newValue.split(""));
    // set state with copy    
    this.setState({ inputLength: inputLengthCopy, characters: inputCharCopy[0] })
  }

  //deletes person from array
  deleteLetterHandler = (letterIndex) => {
    const characters = [...this.state.characters];
    characters.splice(letterIndex, 1);
    this.setState({ characters: characters });
  }

  render() {
    let char = null;

    if (this.state.characters && this.state.inputLength >= 5) {
      char = (
        <section id="CharComponent">
          {this.state.characters.map((characters, index) => {
            return <CharComponent
              click={() => this.deleteLetterHandler(index)}
              displayChar={characters}
              key={index}
            />
          })}
        </section>
      );
    }

    return (
      <section className="container">
        <section className="center">
          <input type="text" onChange={this.updateHandler.bind()} placeholder="Say Hello"/>
          <section className="App">
            <ValidationComp textLength={this.state.inputLength} />
            <p>Character total: {this.state.inputLength}</p>
            {char}
          </section>
        </section>
      </section>
    );
  }
}

export default App;

