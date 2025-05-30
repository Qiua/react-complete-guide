export default function TabButton({ children, label, isActive, onSelect }) {
  return (
    <li>
      <button className={`tab-button ${isActive ? 'active' : ''}`} onClick={onSelect} aria-label={label}>
        {children}
      </button>
    </li>
  )
}
