export const markSquare = pos => ({
  type: 'MARK_SQUARE',
  pos,
});

export const clearBoard = () => ({
  type: 'CLEAR_BOARD',
});
