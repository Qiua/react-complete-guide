import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

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
