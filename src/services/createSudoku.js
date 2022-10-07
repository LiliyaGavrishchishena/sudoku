const getSudokuGrid = () => {
  let sudokuGrid = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],

    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],

    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
  ]
  return sudokuGrid
}

const getNode = (row, column, value, isModifiable) => {
  return {
    row: row,
    column: column,
    value: value,
    isValid: true,
    isModifiable: isModifiable,
    isHinted: false,
  }
}

const createSudoku = maxEmptyCellsCount => {
  const numberGrid = getSudokuGrid(maxEmptyCellsCount)
  let sudokuGrid = []

  for (let i = 0; i < 9; i++) {
    let row = []
    for (let j = 0; j < 9; j++) {
      let isModifiable = numberGrid[i][j] === 0
      let node = getNode(i, j, numberGrid[i][j], isModifiable)
      row.push(node)
    }
    sudokuGrid.push(row)
  }

  return sudokuGrid
}

export default createSudoku
