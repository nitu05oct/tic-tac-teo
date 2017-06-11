import React, { Component } from 'react';

class GameStatus extends Component {

  render(){
    console.log(this.props);
    return (
      <div className="row game-status">
        <div className="col-md-6 col-md-offset-3">
          <h4>{this.props.players[this.props.turn]}'s Turn</h4>
              { this.props.finish ? 
              <button
                className="btn btn-primary btn-block" 
                onClick={this.props.clearBoard}>
                New Game
              </button> : null}
        </div>
      </div>
    );
  }
};

export default GameStatus;