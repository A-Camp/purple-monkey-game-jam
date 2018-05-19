import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Jurors extends Component {

  fuckOff = () => {
    console.log("clicked")
    this.props.wasBlackmailedCallback("Paul")
  }

  questionForMe = () => {
    console.log("question")
    this.props.askedQuestionCallback()
  }

  render() {
    return (
      <div>
      <h1>{this.props.text}</h1>
      <p onClick={this.fuckOff}>I am the juror Paul!
      </p>
      <p onClick={this.questionForMe}>"Ask Paul a question!"</p>
      </div>
    );
  }
}

export default Jurors;
