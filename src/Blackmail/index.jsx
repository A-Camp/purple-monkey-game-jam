import React, { Component } from 'react';
import './blackmail.css'

class Blackmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: {
        noBlackmails: "You are not currently blackmailing anyone.",
        blackmails: "You want to blackmail:",
      }
    }
  }

  render() {
    const { text } = this.state

    return (
      <div className="root">
        <div className="clues">
          <p className="blackmailHeader">BLACKMAIL</p>
          {this.props.blackmails.map((blackmail, i) => (
            <p key={`blackmail-number-${i}`}>• {blackmail.text}</p>
          ))}
        </div>

        {this.props.blackmailing.length > 0 && (
          <div className="yourBlackmails">
            <div>{text.blackmails}</div>
            <div>
            {this.props.blackmailing.map((accusation, i) => (
              <div key={`accused-${i}`}>
                <span>{accusation.juror.name}</span>
                <button onClick={()=> this.props.removeBlackmailAccusation(accusation)}>X</button>
              </div>
            ))}
            </div>
            {this.props.blackmailing.length === 3 && (
              <button onClick={() => this.props.checkWin()}>Submit Blackmail</button>
            )}
          </div>
        )}

        {this.props.blackmailing.length === 0 && (
          <div className="yourBlackmails">
           <div>{text.noBlackmails}</div>
           </div>
        )}
      </div>
    );
  }
}

export default Blackmail;
