import React from 'react'

import Markup from '../Markup'
import Numbers from '../Numbers'
import Button from '../Button'
import './Container.css'

import {
  checkResult,
  createSudoku,
  solveSudoku,
  useLocalStorage,
} from '../../services'

const mediumMaxEmptyCells = 40

const Container = () => {
  const [grid, setGrid] = useLocalStorage('currentGrid', null)
  const [startingGrid, setStartingGrid] = useLocalStorage('startingGrid', null)
  const [clickValue, setClickValue] = useLocalStorage('clickValue', 1)

  const [gameMode, setGameMode] = useLocalStorage(
    'gameMode',
    mediumMaxEmptyCells
  )

  const arrayDeepCopy = arr => {
    let newArray = JSON.parse(JSON.stringify(arr))
    return newArray
  }

  const handleSolveSudoku = () => {
    let solvedBoard = arrayDeepCopy(grid)
    let solvedStatus = solveSudoku(solvedBoard)
    if (solvedStatus === false) {
      return
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j].value === 0) {
          solvedBoard[i][j].isHinted = true
          solvedBoard[i][j].isModifiable = false
        }
      }
    }

    setGrid(solvedBoard)
  }

  const handleStartGame = maxEmptyCellsCount => {
    let newSudokuGrid = createSudoku(maxEmptyCellsCount)

    setStartingGrid(arrayDeepCopy(newSudokuGrid))
    setGrid(arrayDeepCopy(newSudokuGrid))

    setGameMode(maxEmptyCellsCount)
  }

  const handleClear = () => {
    setGrid(arrayDeepCopy(startingGrid))
  }

  const handleClickCell = (row, column) => {
    let newGrid = arrayDeepCopy(grid)
    newGrid[row][column].value = clickValue

    checkResult(newGrid)

    setGrid(newGrid)
  }

  if (grid == null && startingGrid == null) handleStartGame(gameMode)

  return (
    <div className="сontainer">
      <h1 className="header">Sudoku</h1>

      <div className="btns">
        <Button
          onClick={handleClear}
          buttonStyle="btn-green"
          text="Clear All"
        />
        <Button
          onClick={handleSolveSudoku}
          buttonStyle="btn-orange"
          text="Solve Sudoku"
        />
      </div>

      <Numbers setClickValue={setClickValue} selected={clickValue} />

      <Markup handleClickCell={handleClickCell} grid={grid} />
    </div>
  )
}

export default Container
