import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jurors from './Jurors.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blackmailed: [],
      questionsLeft: 20
    };
  }

  wasBlackmailedCallback = jurorName => {
    this.setState({ blackmailed: [...this.state.blackmailed, jurorName]})
  }

  askedQuestionCallback = () => {
    this.setState({ questionsLeft: this.state.questionsLeft - 1 })
  }

  render() {
    return (
      <div className="App">
      <Jurors text="I am jurors" wasBlackmailedCallback={this.wasBlackmailedCallback} askedQuestionCallback={this.askedQuestionCallback}/>
      <div>Number of questions left: {this.state.questionsLeft}</div>
      <div>You want to blackmail:</div>
      <div>{this.state.blackmailed}</div>
      </div>
    );
  }
}

export default App;
