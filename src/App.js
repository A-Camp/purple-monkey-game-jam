import React, { Component } from 'react';
import './app.css';
import Jurors from './Jurors'
import Questioning from './Questioning'
import Blackmail from './Blackmail'
import { jurorData } from './jurorData.js'
import Modal from 'react-modal';

class App extends Component {
  constructor(props) {
    super(props)
    const questions = [
      {number: 1, text: "What do you do for a living?"},
      {number: 2, text: "What education or training do you have?"},
      {number: 3, text: "Do you have any major sources of debt?"},
      {number: 4, text: "What is your relationship status?"}
    ]

    const jurorsWithPics = this.randomJurorPics()

    let blackmails = this.selectBlackmail(jurorData.slice(), 3);
    this.state = {
      blackmailed: [],
      blackmailsLeft: 3,
      questionsLeft: 20,
      currentlyQuestioning: null,
      jurors: jurorsWithPics,
      blackmails: blackmails,
      questions: questions,
      modalIsOpen: true,
      gameEndModalIsOpen: false,
      endText: "",
    };
  }

  randomJurorPics = () => {
    const jurorNums = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const randomJurors = this.shuffle(jurorData)
    return randomJurors.map((juror, i) => {
      return juror = {...juror, picture: `/images/juror-${jurorNums[i]}.png`}
    })
  }

  shuffle = (array) => {
    var i = 0
    , j = 0
    , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  closeModal = () => {
    var audio = new Audio('/distortedLawNOrder.mp3');
    audio.play();
    var audio = new Audio('/Law-And-Order-Theme-Song.wav');
    audio.loop = true;
    audio.play()
    this.setState({modalIsOpen: false});
  }

  openGameEndModal = (text) => {
    this.setState({ endText: text })
    this.setState({gameEndModalIsOpen: true});
  }

  newGame = () => {
    window.location.reload();
  }

  checkWin = () => {
    let winner = true;

    this.state.blackmailed.forEach(accusation => {
      console.log(accusation.juror.name)
      console.log(accusation.blackmail.jurorName)
      if (!(accusation.juror.name === accusation.blackmail.jurorName)) {
        winner = false
      }
    })

    if (winner) {
      this.openGameEndModal("Not Guilty! You should probably be ashamed of yourself, but you earned a sweet pay day.")
    } else {
      this.openGameEndModal("Guilty! Not only is your client getting locked up, you're gunna have to find a defense attorney yourself for those blackmail charges.")
    }
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

  wasBlackmailedCallback = accusation => {
    let blackmailed = [...this.state.blackmailed, accusation]
    this.setState({ blackmailed: blackmailed})
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
      if (!juror.answeredQuestions.includes(question.number)) {
        this.setState({ jurors: newJurors, questionsLeft: this.state.questionsLeft - 1})
      }
    } else {
      alert("You are out of questions!")
    }
  }

  removeBlackmailAccusation = (juror) => {
    let oldBlackmailed = this.state.blackmailed
    let blackmailed = oldBlackmailed.filter(bm => {
      return bm !== juror
    })
    this.setState({blackmailed: blackmailed});
  }

  currentlyQuestioningJuror = () => {
    if (this.state.currentlyQuestioningName) {
      return this.state.jurors.filter(juror => {
        return juror.name === this.state.currentlyQuestioningName
      })[0]
    }
  }

  styleQuestions = () => {
    return this.state.questionsLeft <= 5 ? "lowQuestions" : "noLowQuestions"
  }

  render() {
    return (
      <div className="app">

      <Modal
      isOpen={this.state.modalIsOpen}
      className="modal"
      >
      <p className="modalText">
      Well, it's hopeless. Your client is definitely going to be found guilty. However, as a great defense attorney, you've never let a little thing like evidence get in your way.
      </p>
      <p className="modalText">
      Lucky for you, your client isn't the only scumbag in the courtroom. You've gotten the dirt on several jurors and you're going to blackmail your way into a "not guilty" verdict.
      Unfortunately for you, you don't know which juror each incriminating fact belongs to.
      </p>
      <p className="modalText">
      You can read the intel you've gathered and then question each juror to figure out whose dirty deeds you can use to your client's advantage. Once you think you know who to blackmail, start throwing out accusations. Now get in there and rig that jury!
      </p>
      <button onClick={this.closeModal} className="button">START</button>
      </Modal>

      <Modal
      isOpen={this.state.gameEndModalIsOpen}
      className="modal"
      >
      <p className="modalText">
      {this.state.endText}
      </p>
      <button onClick={this.newGame} className="button">NEW Game</button>
      </Modal>

      <Jurors
      wasBlackmailedCallback={this.wasBlackmailedCallback}
      questioningCallback={this.questioningCallback}
      currentlyQuestioning={this.state.currentlyQuestioning}
      blackmailed={this.state.blackmailed}
      blackmailsLeft={this.state.blackmailsLeft}
      jurors={this.state.jurors}
      blackmailReasons={this.state.blackmails}
      />

      <div className="bottom">

      <div className="gameState">
      <div className="numQuestions">Number of questions left: <span className={this.styleQuestions()}>{this.state.questionsLeft}</span></div>

      {this.state.questionsLeft <= 0 && (
        <div>YOU ARE OUT OF QUESTIONS. PLEASE PICK WHO TO BLACKMAIL</div>
      )}

      <Blackmail
      blackmailing={this.state.blackmailed}
      blackmails={this.state.blackmails}
      removeBlackmailAccusation={this.removeBlackmailAccusation}
      checkWin={this.checkWin}
      />
      </div>

      <div className="jurorCard">
      {this.state.currentlyQuestioningName && (
        <Questioning juror={this.currentlyQuestioningJuror()}
        answerQuestionCallback={this.answerQuestionCallback}
        questions={this.state.questions}/>
      )}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
