import React, { Component } from 'react';
import './questioning.css';

class Questioning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        {number: 1, text: "How do you feel about Fran Drescher?"},
        {number: 2, text: "Have you seen The Nanny?"}
      ]
    }
  }

  answerText = function(question) {
    if (this.props.juror.answeredQuestions.includes(question.number)) {
      let juror =  this.props.juror.answers.filter(answer => {
        return answer.number === question.number
      })[0]
      return juror.text
    } else {
      return ""
    }
  }

  render() {
    return (
      <div className="root">
        <div>You are questioning {this.props.juror.name}</div>

        <div className="flex">
          <div>Juror Img</div>

          <ol className="questions">
          {this.state.questions.map((question, i) => (
            <li key={`question-${i}`} className="question"
            onClick={()=> this.props.answerQuestionCallback(question, this.props.juror)}>
            <div>{question.text}</div>
            <div className="answer">{this.answerText(question)}</div>
            </li>
          ))}
          </ol>
        </div>

      </div>
    );
  }
}

export default Questioning;
