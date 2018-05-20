import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div>
        <div>You are questioning {this.props.juror.name}</div>
        <ol>
          {this.state.questions.map((question, i) => (
            <li key={`question-${i}`}
              onClick={()=> this.props.answerQuestionCallback(question, this.props.juror)}>
              {question.text}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Questioning;
