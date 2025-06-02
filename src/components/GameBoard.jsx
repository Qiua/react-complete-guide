import { useState } from 'react'

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(InitialGameBoard)

  // Function to handle cell click
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]

      updatedGameBoard[rowIndex][colIndex] = 'X'
      return updatedGameBoard
    })
  }
  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className='game-cell'>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
