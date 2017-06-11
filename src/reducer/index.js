import React from 'react';

const board = [['', '', ''], ['', '', ''], ['', '', '']];

const initialState = {
  board,
  prevX : '',
  prevY : '',
  finish: false,
  players: ['X', 'O'],
  turn: 0
};


const markSquare = (board, pos, mark) => {
  let {x, y} = pos;
  console.log(mark);
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
      console.log('current',x, y);
      let prevX = state.prevX;
      let prevY = state.prevY; 
      console.log('prev',prevX, prevY);
      console.log('board',state.board);
      //  console.log('freezboard',state.freezedBorad);
        if(state.board[x][y] === '' && prevX === '' && prevY === ''){
        let mark = getMark(state);
        
        let board = markSquare(state.board, {x, y}, mark);
        prevX = x;
        prevY = y;
        //let turn = takeTurn(state);
    
       // let finish = checkGameStatus(board); 
        //console.log(finish);
        console.log('board',board);
       // return Object.assign({}, state, {board, turn , finish});
        return Object.assign({}, state, {board, prevX, prevY});

      } else if(prevX === x && prevY === y && state.board[x][y] === getMark(state)){
        console.log('here in sasme cell');
        let board = markSquare(state.board, {x, y}, '');
        return Object.assign({}, state, {board});
      }
      else if(prevX !== '' && prevY !== '' && state.board[x][y] === ''){
        console.log('here in another cell');
        let mark = getMark(state);

        let board = markSquare(state.board, {x, y}, mark);
        console.log(board,prevX, prevY);
        x = prevX;
        y = prevY;
        board = markSquare(board, {x, y}, '');
        console.log(board);
        prevX = action.pos.x;
        prevY = action.pos.y;
        return Object.assign({}, state, {board, prevX, prevY});
      }
      else
        return state;

    case 'DONE_MOVE':    
       // let board = markSquare(state.board, {x, y}, mark);

        console.log(state.board);
        let board = state.board;
        let turn = takeTurn(state);    
        let finish = checkGameStatus(board); 
       // Object.assign(freezedBorad,board);
         prevX = '';
         prevY = '';
      return Object.assign({}, state, {board, prevX, prevY, turn , finish});  

    case 'CLEAR_BOARD':
      return Object.assign({}, initialState);

    default:
      return state;
  }
}


export default ticTacToeApp;