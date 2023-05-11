import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';

function Question({ handleAnswer }) {
  const { questions, currentQuestionIndex } = useContext(QuizContext);

  if (!questions || !questions[currentQuestionIndex]) {
    return null;
  }

  return (
    <>
      <h2 id="question" className="headline-secondary--grouped">{questions[currentQuestionIndex].text}</h2>

      {questions[currentQuestionIndex].choices.map((choice, index) => (
        <div key={index}>
          <p id={"choice" + index}>{choice}</p>
          <button id={"guess" + index} className="btn--default" onClick={() => handleAnswer(choice)}>Select Answer</button>
        </div>
      ))}
    </>
  );
}

export default Question;
