import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    function handleClickTab(selectedButton) {
        // This function will be called when a tab is clicked.
        // You can use the `selectedButton` parameter to determine which tab was clicked.
        console.log(`Tab clicked: ${selectedButton}`);
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
                        <TabButton
                            onSelect={() => handleClickTab("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleClickTab("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleClickTab("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleClickTab("state")}>
                            State
                        </TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
