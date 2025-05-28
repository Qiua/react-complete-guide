import logo from "./assets/react-core-concepts.png";
import coreConcept1 from "./assets/components.png";

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
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt={props.description}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              img={coreConcept1}
            />
            <CoreConcepts
              title="Props"
              description="The core UI building block."
              img={coreConcept1}
            />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
