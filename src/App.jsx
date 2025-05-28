import logo from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

function getRandomDescription() {
    const reactDescriptions = ["Fundamental", "Essential", "Core", "Master"];
    const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
    return reactDescriptions[randomIndex];
}

function Header() {
    const description = getRandomDescription();
    return (
        <header>
            <img src={logo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
}

function CoreConcepts({ img, title = "Title", description }) {
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

function App() {
    return (
        <div>
            <Header /> {/* First component! */}
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
