function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <li>
            <span className='player-name'>Player 1</span>
            <span className='player-symbol'>X</span>
            <button>Edit</button>
          </li>
          <li>
            <span className='player-name'>Player 2</span>
            <span className='player-symbol'>O</span>
            <button>Edit</button>
          </li>
        </ol>
        GAME BOARD
      </div>
      GAME LOG
    </main>
  )
}

export default App
