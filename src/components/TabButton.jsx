export default function TabButton({ children, label, isSelected, onSelect }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect} aria-label={label}>
        {children}
      </button>
    </li>
  )
}
