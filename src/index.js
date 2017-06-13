import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import App from './component/App';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
