import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import { QuizContext } from './QuizContext';
import { questions } from './QuizData';
import './Quiz.css';

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    if (questions[currentQuestionIndex].answer === answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <QuizContext.Provider value={{ score, questions, currentQuestionIndex }}>
      <div className="grid">
        <div id="quiz" className="centered grid__col--8">
          <h1>Ukraine Quiz</h1>

          <Question handleAnswer={handleAnswer} />

          <Score />

        </div>
      </div>
    </QuizContext.Provider>
  );
}

export default Quiz;
