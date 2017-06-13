import React from 'react';
import { Provider } from 'react-redux';
import Board from './container/Board';
import PlayerInfo from './container/PlayerInfo';
import store from './store';

const App = () =>
  <div>
    <Board />
    <PlayerInfo />
  </div>;

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
