import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameStatus extends Component {
  render(){
    return (
      <div className="row game-status">
        <div className="col-md-6 col-md-offset-3">
          <h1>{this.props.players[this.props.turn]}'s Turn</h1>
              { this.props.finish ? 
              <button
                className="btn btn-primary btn-block" 
                onClick={this.props.clearBoard}>
                New Game
              </button> : <button
                className="btn btn-primary btn-block" 
                onClick={this.props.doneMove}>
                Done
              </button>}
        </div>
      </div>
    );
  }
};

GameStatus.propTypes = {
  players: PropTypes.array,
  turn: PropTypes.number,
  finish: PropTypes.bool,
  doneMove: PropTypes.func,
  clearBoard: PropTypes.func
};

export default GameStatus;