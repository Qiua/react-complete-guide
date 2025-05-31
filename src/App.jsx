import { useState } from 'react'

import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from './components/TabButton'

function App() {
  // State to manage the selected tab
  const [activeTab, setActiveTab] = useState()
  // activeTab is the state variable that holds the currently state of the active tab.
  // setActiveTab is the function to update the activeTab state.

  function handleClickTab(selectedButton) {
    // This function will be called when a tab is clicked.
    // You can use the `selectedButton` parameter to determine which tab was clicked.
    console.log(`Tab clicked: ${selectedButton}`)
    setActiveTab(selectedButton) // Update the selected tab
  }

  // If a tab is selected, we will display the corresponding content.
  let activeTabContent = <p>Please select a topic.</p>

  if (activeTab) {
    activeTabContent = (
      <div>
        <h3>{EXAMPLES[activeTab].title}</h3>
        <p>{EXAMPLES[activeTab].description}</p>
        <pre>
          <code>{EXAMPLES[activeTab].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header /> {/* First component! */}
      <main>
        <section id='core-concepts'>
          <h2>React Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={activeTab === 'components'} onSelect={() => handleClickTab('components')}>
              Components
            </TabButton>
            <TabButton isSelected={activeTab === 'jsx'} onSelect={() => handleClickTab('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={activeTab === 'props'} onSelect={() => handleClickTab('props')}>
              Props
            </TabButton>
            <TabButton isSelected={activeTab === 'state'} onSelect={() => handleClickTab('state')}>
              State
            </TabButton>
          </menu>
          <div id='tab-content'>{activeTabContent}</div>
        </section>
      </main>
    </div>
  )
}

export default App
