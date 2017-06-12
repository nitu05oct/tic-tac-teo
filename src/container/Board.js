import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markSquare } from '../action';
import Grid from '../component/Grid';


class Board extends Component {

render(){
    return (
      <Grid board={this.props.board} classNameToSet = {this.props.moveClass} onSquareClick={this.props.markSquare} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    board: state.board,
    moveClass : state.moveClass
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({markSquare}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
