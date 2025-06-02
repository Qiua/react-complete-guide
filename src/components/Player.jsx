import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setIsEditing(false)
    }
  }

  let editablePlayerName = isEditing ? (
    <input type='text' required value={playerName} onChange={handleNameChange} onKeyDown={handleKeyDown} />
  ) : (
    <span className='player-name'>{playerName}</span>
  )

  return (
    <li className='player'>
      {editablePlayerName}
      <span className='player-symbol'>{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
