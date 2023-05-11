import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';

function Score() {
  const { score } = useContext(QuizContext);

  return (
    <h3 id="score">{`Your score is: ${score}`}</h3>
  );
}

export default Score;
