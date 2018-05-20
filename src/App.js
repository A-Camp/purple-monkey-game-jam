import React, { Component } from 'react';
import './App.css';
import Jurors from './Jurors.js'
import Questioning from './Questioning.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blackmailed: [],
      blackmailsLeft: 3,
      questionsLeft: 20,
      currentlyQuestioning: null,
      jurors: [
        {name: "Squilliam Fancyson", answeredQuestions: [], answers: [
          {number: 1, text: "She's my absolute fav!"},
          {number: 2, text: "Only every episode!"}
        ]},
        {name: "Fucko Bucko", answeredQuestions: [], answers: [
          {number: 1, text: "Who?"},
          {number: 2, text: "What?"}
        ]},
        {name: "Paulina Smith", answeredQuestions: [], answers: [
          {number: 1, text: "Who?"},
          {number: 2, text: "What?"}
        ]},
        {name: "Mario Mario", answeredQuestions: [], answers: [
          {number: 1, text: "Who?"},
          {number: 2, text: "What?"}
        ]},
        {name: "Luigi Mario", answeredQuestions: [], answers: [
          {number: 1, text: "Who?"},
          {number: 2, text: "What?"}
        ]}
      ]
    };
  }

  wasBlackmailedCallback = juror => {
    this.setState({ blackmailed: [...this.state.blackmailed, juror]})
  }

  questioningCallback = (juror) => {
    this.setState({ currentlyQuestioningName: juror.name })
  }

  answerQuestionCallback = (question, juror) => {
    let newJurors = this.state.jurors.map(j => {
      if (juror.name === j.name) {
        return {...j, answeredQuestions: [...j.answeredQuestions, question.number]}
      } else {
        return j
      }
    })
    this.setState({ jurors: newJurors, questionsLeft: this.state.questionsLeft - 1})
  }

  currentlyQuestioningJuror = ()=> {
    if (this.state.currentlyQuestioningName) {
      return this.state.jurors.filter(juror => {
        return juror.name === this.state.currentlyQuestioningName
      })[0]
    }
  }

  render() {
    return (
      <div className="App">
        <Jurors
        wasBlackmailedCallback={this.wasBlackmailedCallback}
        questioningCallback={this.questioningCallback}
        currentlyQuestioning={this.state.currentlyQuestioning}
        blackmailed={this.state.blackmailed}
        blackmailsLeft={this.state.blackmailsLeft}
        jurors={this.state.jurors}
         />
        <div>Number of questions left: {this.state.questionsLeft}</div>
        {this.state.currentlyQuestioningName && (
          <Questioning juror={this.currentlyQuestioningJuror()} answerQuestionCallback={this.answerQuestionCallback} />
        )}
        <div>You want to blackmail:</div>
        <div>
          {this.state.blackmailed.map((juror, i) => (
            <div key={`accused-${i}`}>{juror.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
