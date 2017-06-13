import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearBoard } from '../action';
import GameStatus from '../component/GameStatus';

const PlayerInfo = props =>
  <GameStatus turn={props.turn} finish={props.finish} players={props.players} onNewGameClick={props.clearBoard} />;

PlayerInfo.propTypes = {
  turn: PropTypes.number.isRequired,
  finish: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearBoard: PropTypes.func.isRequired,
};

const mapStateToProps = ({ turn, finish, players }) => ({
  turn,
  finish,
  players,
});

export default connect(mapStateToProps, { clearBoard })(PlayerInfo);
