import { createStore } from 'redux';

const initialState = {
  score: 0,
  currentQuestionIndex: 0,
};

// Define your reducer function
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + 1 };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(quizReducer);

export default store;
