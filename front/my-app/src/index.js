import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
