import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './Quiz';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Quiz />
    </Provider>
);
