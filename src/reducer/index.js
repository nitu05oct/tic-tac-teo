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
  //console.log(x,y,board);
  /*console.log(board.slice(0, x));
  console.log(board[x].slice(0, y));
  console.log(board[x].slice(y + 1));
  console.log(board.slice(x + 1));*/
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
 // console.log('2-d array',arr2D);
    var indexArr = arr2D.map(function(arr, i) {
      //console.log('array',arr,'have',arr.includes(''));
              if(arr.includes('') === true)
                return 0;
            return 1;
    });
    //console.log('final indexArr',indexArr,'has',indexArr.includes(0));
   // console.log('final return',indexArr.indexOf(1));
    return indexArr.includes(0);
};

const checkGameStatus = (board) => {
    //if(board.findIndex((row)=> {console.log(row);return row.findIndex((cell)=> {console.log(cell); return cell === '';})}))
  //  console.log('fn return',findIn2dArray(board,''));
    if(!findIn2dArray(board,''))  
    {
     // console.log(board);
      return true;
    }
    else
      return false;

 };

const ticTacToeApp = (state = initialState, action) => {
  switch(action.type){

    case 'MARK_SQUARE':
      let {x, y} = action.pos;

      //if(!state.winner && state.board[x][y] === ''){
        if(state.board[x][y] === ''){
        let mark = getMark(state);
        let board = markSquare(state.board, {x, y}, mark);
        let turn = takeTurn(state);
     //   let winner = utils.checkWinner(board);
        let finish = checkGameStatus(board); 
        console.log(finish);
        //return Object.assign({}, state, {board, turn, winner});
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