import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearBoard } from '../action';
import GameStatus from '../component/GameStatus';

class PlayerInfo extends Component {
  render() {
    return <GameStatus {...this.props} />;
  }
}

const mapStateToProps = ({ turn, finish, players }) => ({
  turn,
  finish,
  players,
});

const mapDispatchToProps = dispatch => bindActionCreators({ clearBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
