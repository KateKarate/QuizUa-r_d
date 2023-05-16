import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import { useSelector } from 'react-redux';

function Question({ handleAnswer }) {
  const currentQuestionIndex = useContext(QuizContext);
  const selectedQuestions = useSelector(state => state.questions);

  if (!selectedQuestions || !selectedQuestions[currentQuestionIndex]) {
    return null;
  }

  return (
    <>
      <h2 id="question" className="headline-secondary--grouped">{selectedQuestions[currentQuestionIndex].text}</h2>

      {selectedQuestions[currentQuestionIndex].choices.map((choice, index) => (
        <div key={index}>
          <p id={"choice" + index}>{choice}</p>
          <button id={"guess" + index} className="btn--default" onClick={() => handleAnswer(choice)}>Select Answer</button>
        </div>
      ))}
    </>
  );
}

export default Question;
