import React from 'react';
import PropTypes from 'prop-types';

const GameStatus = props =>
  <div className="row game-status">
    <div className="col-md-6 col-md-offset-3">
      <h4>{props.players[props.turn]}{`'s Turn`}</h4>
      {props.finish
        ? <button className="btn btn-primary btn-block" onClick={props.onNewGameClick}>
            New Game
          </button>
        : null}
    </div>
  </div>;

GameStatus.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  turn: PropTypes.oneOf([0, 1]).isRequired,
  finish: PropTypes.bool.isRequired,
  onNewGameClick: PropTypes.func.isRequired,
};

export default GameStatus;
