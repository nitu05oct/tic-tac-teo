import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  renderBoard(){
    return this.props.board.map( (row, x) => {
      return (

        <tr key={x}>
          {row.map( (square, y) => {
            return (
              <td className = {this.props.classNameToSet}
                key={y}
                onClick={(event) => {
                  this.props.onSquareClick({x, y});
                }}
              >
                { square }
              </td>
            );
          })}
        </tr>
      );
    })
  }

  render(){
    return (
      <div className="row game-board">
        <div className="col-md-12">
          <table className="table table-bordered">
            <tbody>{this.renderBoard()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  board: PropTypes.array,
  classNameToSet: PropTypes.string,
  onSquareClick: PropTypes.func
};

export default Grid;