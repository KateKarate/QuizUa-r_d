import React, { useContext }  from 'react';
import Question from './Question';
import Score from './Score';
import { useDispatch } from 'react-redux';
import { nextQuestion, incrementScore } from './actions';
import { QuizContext } from './QuizContext';
import { questions } from './QuizData';
import './Quiz.css';

function Quiz() {
  const { currentQuestionIndex } = useContext(QuizContext);
  const dispatch = useDispatch();

  const handleAnswer = (answer) => {
    if (questions[currentQuestionIndex].answer === answer) {
      dispatch(incrementScore());
    }
    dispatch(nextQuestion());
  };

  return (
      <div className="grid">
        <div id="quiz" className="centered grid__col--8">
          <h1>Ukraine Quiz</h1>

          <Question handleAnswer={handleAnswer} />

          <Score />

        </div>
      </div>
  );
}

export default Quiz;
