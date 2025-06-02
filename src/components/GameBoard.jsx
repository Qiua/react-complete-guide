const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function Gameboard() {
  return (
    <ol id='game-board'>
      {InitialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex} className='game-cell'>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
