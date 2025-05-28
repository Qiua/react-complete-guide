import img from "./assets/react-core-concepts.png";

function getRandomDescription() {
  const reactDescriptions = ["Fundamental", "Essential", "Core", "Master"];
  const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  return reactDescriptions[randomIndex];
}

function Header() {
  const description = getRandomDescription();
  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header /> {/* First component! */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
