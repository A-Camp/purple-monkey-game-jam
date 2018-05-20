import React, { Component } from 'react';
import './jurors.css'

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
          <h2>Jury Box</h2>

          <div className="jurors">
          {this.props.jurors.map((juror, i) => (
            <span key={`juror-${i}`} className="juror">
              <img src="images/barney.png"/>
              <div>{juror.name}</div>
              <div><button onClick={() => this.questionForMe(juror)}>Ask Questions</button></div>
              <div><button onClick={() => this.fuckOff(juror)}>Blackmail!</button></div>
            </span>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Jurors;
