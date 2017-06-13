import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { markSquare } from '../action';
import Grid from '../component/Grid';

const Board = props => <Grid board={props.board} onSquareClick={props.markSquare} />;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  markSquare: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  board: state.board,
});

export default connect(mapStateToProps, { markSquare })(Board);
