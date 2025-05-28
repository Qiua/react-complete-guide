export default function TabButton({ children, label, isActive, onClick }) {
    return (
        <li>
            <button
                className={`tab-button ${isActive ? "active" : ""}`}
                onClick={onClick}
                aria-label={label}
            >
                {label}
                {children}
            </button>
        </li>
    );
}
