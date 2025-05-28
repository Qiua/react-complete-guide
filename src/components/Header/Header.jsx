import logo from "../../assets/react-core-concepts.png";
import "./Header.css";

function getRandomDescription() {
    const reactDescriptions = ["Fundamental", "Essential", "Core", "Master"];
    const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
    return reactDescriptions[randomIndex];
}

export default function Header() {
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
