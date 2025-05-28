import "./CoreConcepts.css";

export default function CoreConcepts({ img, title = "Title", description }) {
    // Default title to "Title" if not provided
    // Destructuring props to extract img, title, and description
    return (
        <li>
            <img src={img} alt={description}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
