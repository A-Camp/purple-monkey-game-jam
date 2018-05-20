import React, { Component } from 'react';
import './jurors.css'
import Modal from 'react-modal';

class Jurors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accuseModalIsOpen: false,
      wantsToAccuseJuror: null,
    };
  }

  startAccuse = (juror) => {
    this.setState({ accuseModalIsOpen: true, wantsToAccuseJuror: juror })
  }

  accuseJuror = (blackmail) => {
    const accuse = { juror: this.state.wantsToAccuseJuror, blackmail: blackmail }
    this.fuckOff(accuse)
    this.setState({ accuseModalIsOpen: false, wantsToAccuseJuror: null })
  }

  closeAccuseModal = () => {
    this.setState({ accuseModalIsOpen: false, wantsToAccuseJuror: null })
  }

  fuckOff = (accusation) => {
    const notAccusedYet = !this.props.blackmailed.includes(accusation)
    const blackmailAvailable = this.props.blackmailed.length < this.props.blackmailsLeft
    if (notAccusedYet && blackmailAvailable) {
      this.props.wasBlackmailedCallback(accusation)
    }
  }

  questionForMe = (juror) => {
    this.props.questioningCallback(juror)
  }

  clickableBlackmail = (blackmail) => {
    let clickable = true
    this.props.blackmailed.forEach(accusation => {
      if (accusation.blackmail === blackmail) {
        clickable = false;
      }
    })
    return clickable;
  }

  render() {
    return (
      <div>

      <Modal
      isOpen={this.state.accuseModalIsOpen}
      className="modal"
      >

      <div className="modalText">
        {this.state.wantsToAccuseJuror && (
          <div>
            <div>What do you want to blackmail {this.state.wantsToAccuseJuror.name} with?</div>
            {this.props.blackmailReasons.map((blackmail, i) => (
              <div>
                { (this.clickableBlackmail(blackmail)) && (
                  <div onClick={() => this.accuseJuror(blackmail)} key={i} className="clickableBlackmail">
                    <p>{blackmail.text}</p>
                  </div>
                )}

                { !(this.clickableBlackmail(blackmail)) && (
                  <div key={i} className="nonClickableBlackmail">
                    <p>{blackmail.text}</p>
                  </div>
                )}
                </div>
              ))}
              <button onClick={() => this.closeAccuseModal()}>Nevermind</button>
          </div>
        )}
      </div>

      </Modal>

      <div className="jury-box">
      <h2>Jury Box</h2>

      <div className="jurors">
      {this.props.jurors.map((juror, i) => (
        <span key={`juror-${i}`} className="juror">
        <img src={juror.picture} className="jurorPic"/>
        <div>{juror.name}</div>
        <div className="jurorButton"><button onClick={() => this.questionForMe(juror)}>Question</button></div>
        <div className="jurorButton"><button onClick={() => this.startAccuse(juror)}>Blackmail</button></div>
        </span>
      ))}
      </div>
      </div>
      </div>
    );
  }
}

export default Jurors;
