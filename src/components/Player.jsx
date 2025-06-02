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

  let editablePlayerName = isEditing ? (
    <input type='text' required value={playerName} onChange={handleNameChange} />
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
