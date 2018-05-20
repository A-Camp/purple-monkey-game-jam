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
        <div>
        <p>Your blackmail clues are</p>
        </div>
        {this.props.blackmails.map((blackmail, i) => (
          <div key={`blackmail-number-${i}`}>{blackmail.text}</div>
        ))}

        {this.props.blackmailing.length > 0 && (
          <div>
            <div>{text.blackmails}</div>
            <div>
            {this.props.blackmailing.map((juror, i) => (
              <div key={`accused-${i}`}>
                <span>{juror.name}</span>
                <button onClick={()=> this.props.removeBlackmailAccusation(juror)}>X</button>
              </div>
            ))}
            </div>
            {this.props.blackmailing.length === 3 && (
              <button onClick={() => this.props.checkWin()}>Submit Blackmail</button>
            )}
          </div>
        )}

        {this.props.blackmailing.length === 0 && (
          <div>
           <div>{text.noBlackmails}</div>
           </div>
        )}
      </div>
    );
  }
}

export default Blackmail;
