import React from 'react'
import Cell from '../Cell'
import './Markup.css'

const Markup = ({ grid, handleClickCell }) => {
  return (
    <table>
      <tbody>
        {grid &&
          grid.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => {
                  return (
                    <Cell
                      key={rowIndex + '-' + columnIndex}
                      cell={cell}
                      handleClickCallback={handleClickCell}
                    />
                  )
                })}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Markup
