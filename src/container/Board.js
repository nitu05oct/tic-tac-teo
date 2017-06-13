import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markSquare } from '../action';
import Grid from '../component/Grid';

class Board extends Component {
  render() {
    return <Grid board={this.props.board} onSquareClick={this.props.markSquare} />;
  }
}

const mapStateToProps = state => ({
  board: state.board,
});

const mapDispatchToProps = dispatch => bindActionCreators({ markSquare }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
