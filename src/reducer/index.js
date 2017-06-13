const initialBoard = [['', '', ''], ['', '', ''], ['', '', '']];

const initialState = {
  board: initialBoard,
  finish: false,
  players: ['X', 'O'],
  turn: 0,
};

const markSquare = (board, pos, mark) => {
  const { x, y } = pos;

  return [...board.slice(0, x), [...board[x].slice(0, y), mark, ...board[x].slice(y + 1)], ...board.slice(x + 1)];
};

const takeTurn = ({ turn }) => (turn ? 0 : 1);

const getMark = ({ players, turn }) => players[turn];

// returns the index of inner array, if val matches in any array
const findIn2dArray = (arr2D, val) => {
  const indexArr = arr2D.map((arr, i) => {
    if (arr.includes('') === true) return 0;
    return 1;
  });
  return indexArr.includes(0);
};

const checkGameStatus = board => {
  if (!findIn2dArray(board, '')) {
    return true;
  }
  return false;
};

const ticTacToeApp = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_SQUARE': {
      const { x, y } = action.pos;
      if (state.board[x][y] === '') {
        const mark = getMark(state);
        const board = markSquare(state.board, { x, y }, mark);
        const turn = takeTurn(state);

        const finish = checkGameStatus(board);
        console.log(finish);

        return Object.assign({}, state, { board, turn, finish });
      }
      return state;
    }
    case 'CLEAR_BOARD':
      return Object.assign({}, initialState);

    default:
      return state;
  }
};

export default ticTacToeApp;
