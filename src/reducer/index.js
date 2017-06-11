import React from 'react';

const board = [['', '', ''], ['', '', ''], ['', '', '']];

const initialState = {
  board,
  finish: false,
  players: ['X', 'O'],
  turn: 0
};


const markSquare = (board, pos, mark) => {
  let {x, y} = pos;
  
  return [
  ...board.slice(0, x),
  [
  ...board[x].slice(0, y),
  mark,
  ...board[x].slice(y + 1)
  ],
  ...board.slice(x + 1)
  ];
};

const takeTurn = ({turn}) => {
  return (turn) ? 0 : 1;
};

const getMark = ({players, turn}) => {
  return players[turn];
};

// returns the index of inner array, if val matches in any array
const findIn2dArray = (arr2D, val)=>{
     var indexArr = arr2D.map(function(arr, i) {
              if(arr.includes('') === true)
                return 0;
            return 1;
    });
    return indexArr.includes(0);
};

const checkGameStatus = (board) => {
    if(!findIn2dArray(board,''))  
    {
      return true;
    }
    else
      return false;

 };

const ticTacToeApp = (state = initialState, action) => {
  switch(action.type){

    case 'MARK_SQUARE':
      let {x, y} = action.pos;

        if(state.board[x][y] === ''){
        let mark = getMark(state);
        let board = markSquare(state.board, {x, y}, mark);
        let turn = takeTurn(state);
    
        let finish = checkGameStatus(board); 
        console.log(finish);
        
        return Object.assign({}, state, {board, turn , finish});

      } else {
        return state
      }

    case 'CLEAR_BOARD':
      return Object.assign({}, initialState);

    default:
      return state;
  }
}


export default ticTacToeApp;