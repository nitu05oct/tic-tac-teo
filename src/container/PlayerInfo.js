import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearBoard , doneMove } from '../action';
import GameStatus from '../component/GameStatus';

class PlayerInfo extends Component {

  render(){
    return (
        <GameStatus
          {...this.props}
        />
      );
  }
}

 const mapStateToProps = ({turn, finish, players}) => {
  return {
    turn,
    finish,
    players
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clearBoard , doneMove}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);