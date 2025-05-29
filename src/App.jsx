import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    function handleClickTab(event) {
        event.preventDefault();
        console.log("Tab clicked:", event.target.textContent);
    }
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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleClickTab}>
                            Components
                        </TabButton>
                        <TabButton onSelect={handleClickTab}>JSX</TabButton>
                        <TabButton onSelect={handleClickTab}>Props</TabButton>
                        <TabButton onSelect={handleClickTab}>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
