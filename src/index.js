import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = [], action) => {
    switch (action.type) {
      case "ADD_FEELING":
        return [...state, action.payload]
      case "ADD_UNDERSTANDING":
        return [...state, action.payload]
      case "ADD_SUPPORTED":
        return state;
      case "ADD_COMMENTS":
        return state;
      default:
        return state;
    }
}


const store = createStore(
    combineReducers({
    feedback,

    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
