import React from 'react';

const board = [['', '', ''], ['', '', ''], ['', '', '']];

const initialState = {
  board,
  prevX : '',
  prevY : '',
  finish: false,
  players: ['X', 'O'],
  moveClass: '',
  turn: 0
};


const markSquare = (board, pos, mark) => {
  let {x, y} = pos;
 // console.log(mark);

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
      let prevX = state.prevX;
      let prevY = state.prevY;      
      
      if(state.board[x][y] === '' && prevX === '' && prevY === ''){
        let mark = getMark(state);
        let board = markSquare(state.board, {x, y}, mark);
        prevX = x;
        prevY = y;
        let moveClass = 'red-box';       
        return Object.assign({}, state, {board, prevX, prevY,moveClass});
      } 
      else if(prevX === x && prevY === y && state.board[x][y] === getMark(state)){
        let board = markSquare(state.board, {x, y}, '');
        return Object.assign({}, state, {board});
      }
      else if(prevX !== '' && prevY !== '' && state.board[x][y] === ''){
        let mark = getMark(state);
        let board = markSquare(state.board, {x, y}, mark);        
        x = prevX;
        y = prevY;
        board = markSquare(board, {x, y}, '');        
        prevX = action.pos.x;
        prevY = action.pos.y;
        return Object.assign({}, state, {board, prevX, prevY});
      }
      else
        return state;

    case 'DONE_MOVE':    
        let board = state.board;
        let turn = takeTurn(state);    
        let finish = checkGameStatus(board);
        let moveClass = ''; 
        prevX = '';
        prevY = '';
      return Object.assign({}, state, {board, prevX, prevY, turn , finish , moveClass});  

    case 'CLEAR_BOARD':
      return Object.assign({}, initialState);

    default:
      return state;
  }
}


export default ticTacToeApp;