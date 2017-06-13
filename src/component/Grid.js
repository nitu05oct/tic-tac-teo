/* eslint react/no-array-index-key: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Grid extends PureComponent {
  renderBoard() {
    return this.props.board.map((row, x) =>
      <tr key={x}>
        {row.map((square, y) =>
          <td key={y} onClick={() => this.props.onSquareClick({ x, y })}>
            {square}
          </td>,
        )}
      </tr>,
    );
  }

  render() {
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

export default Grid;
