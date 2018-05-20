import React, { Component } from 'react';
import './App.css';
import Jurors from './Jurors.jsx'
import Questioning from './Questioning.js'

class App extends Component {
  constructor(props) {
    super(props)
    let jurors = [
      {name: "Squilliam Fancyson", answeredQuestions: [],
        blackmailOptions: [
          {number: 1, text: "has a butt"},
          {number: 2, text: "doesn't have a butt"}
        ],
        answers: [
          {number: 1, text: "She's my absolute fav!"},
          {number: 2, text: "Only every episode!"}
        ]
      },
      {name: "Mario Mario", answeredQuestions: [],
        blackmailOptions: [
          {number: 1, text: "dfbsdbfds"},
          {number: 2, text: "sdfbdsfbsdb"}
        ],
        answers: [
          {number: 1, text: "She's my absolute fav!"},
          {number: 2, text: "Only every episode!"}
        ]
      },
      {name: "Luigi Mario", answeredQuestions: [],
        blackmailOptions: [
          {number: 1, text: "dsfbsd"},
          {number: 2, text: "sdfbbd"}
        ],
        answers: [
          {number: 1, text: "She's my absolute fav!"},
          {number: 2, text: "Only every episode!"}
        ]
      },
      {name: "Teeth Teeth", answeredQuestions: [],
        blackmailOptions: [
          {number: 1, text: "ghgmhmghmg"},
          {number: 2, text: "ghmghmgt"}
        ],
        answers: [
          {number: 1, text: "She's my absolute fav!"},
          {number: 2, text: "Only every episode!"}
        ]
      },
    ]
    let blackmails = this.selectBlackmail(jurors.slice(), 3);
    this.state = {
      blackmailed: [],
      blackmailsLeft: 3,
      blackmails: [],
      questionsLeft: 20,
      currentlyQuestioning: null,
      jurors: jurors,
      blackmails: blackmails
    };
  }

  selectBlackmail = (jurors, blackmailCount) => {
    let blackmails = [];
    for (let i=0; i < blackmailCount; i++) {
      let jurorIndex = Math.floor(Math.random() * jurors.length)
      let juror = jurors.splice(jurorIndex, 1)[0];
      let blackmailOptionIndex = Math.floor(Math.random() * juror.blackmailOptions.length)
      let blackmailOption = juror.blackmailOptions[blackmailOptionIndex]
      blackmailOption["jurorName"] = juror.name
      blackmails.push(juror.blackmailOptions[blackmailOptionIndex])
    }
    return blackmails;
  }

  wasBlackmailedCallback = juror => {
    let blackmailed = [...this.state.blackmailed, juror]
    this.setState({ blackmailed: blackmailed})
    if (blackmailed.length === 3) {
      let blackmails = this.state.blackmails
      let a = this.state.blackmails.map((bm) => {return bm.jurorName}).sort()
      let b = blackmailed.map((bm) => {return bm.name}).sort()
      if (JSON.stringify(a) === JSON.stringify(b)) {
        alert("Not Guilty! You should probably be ashamed of yourself, but you earned a sweet pay day.")
      } else {
        alert("Guilty! Not only is your client getting locked up, you're gunna have to find a defense attorney yourself for those blackmail charges.")
      }
    }
  }

  questioningCallback = (juror) => {
    this.setState({ currentlyQuestioningName: juror.name })
  }

  answerQuestionCallback = (question, juror) => {
    if (this.state.questionsLeft > 0) {
      let newJurors = this.state.jurors.map(j => {
        if (juror.name === j.name) {
          return {...j, answeredQuestions: [...j.answeredQuestions, question.number]}
        } else {
          return j
        }
      })
      this.setState({ jurors: newJurors, questionsLeft: this.state.questionsLeft - 1})
    } else {
      alert("You are out of questions!")
    }
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
      <p>
        Well, it's hopeless. Your client is definitely going to be found guilty. However, as a great defense attorney, you've never let a little thing like evidence get in your way.
        Lucky for you, your client isn't the only scumbag in the courtroom. You've gotten the dirt on several jurors and you're going to blackmail your way into a "not guilty" verdict.
        Unfortunately for you, you don't know which juror each incriminating fact belongs to.
      </p>
      <p>
        You can read the intel you've gathered and then question each juror to figure out whose dirty deeds you can use to your client's advantage. Once you think you know who to blackmail, start throwing out accusations. Now get in there and rig that jury!
      </p>

      <Jurors
      wasBlackmailedCallback={this.wasBlackmailedCallback}
      questioningCallback={this.questioningCallback}
      currentlyQuestioning={this.state.currentlyQuestioning}
      blackmailed={this.state.blackmailed}
      blackmailsLeft={this.state.blackmailsLeft}
      jurors={this.state.jurors}
      />
      {this.state.questionsLeft === 0 && (
        <div>YOU ARE OUT OF QUESTIONS. PLEASE PICK WHO TO BLACKMAIL</div>
      )}
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
