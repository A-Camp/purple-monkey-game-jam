import React, { Component } from 'react';
import './App.css';

class Jurors extends Component {
  fuckOff = (juror) => {
    const notAccusedYet = !this.props.blackmailed.includes(juror)
    const blackmailAvailable = this.props.blackmailed.length < this.props.blackmailsLeft
    if (notAccusedYet && blackmailAvailable) {
      this.props.wasBlackmailedCallback(juror)
    }
  }

  questionForMe = (juror) => {
    this.props.questioningCallback(juror)
  }

  render() {
    return (
      <div>
        <div className="jury-box">
          {this.props.jurors.map((juror, i) => (
            <div key={`juror-${i}`}>
              <div>{juror.name}</div>
              <button onClick={() => this.questionForMe(juror)}>Ask Questions</button>
              <button onClick={() => this.fuckOff(juror)}>Blackmail!</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jurors;
