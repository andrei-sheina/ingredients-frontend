import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ingridientsApp from './reducers/';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import App from './App';
import './index.css';

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(applyMiddleware(thunk, logger));
} else {
  middleware = applyMiddleware(thunk);
}

let store = createStore(
  ingridientsApp,
  {},
  middleware
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
