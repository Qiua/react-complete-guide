import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'

export default function Examples() {
  const [activeTab, setActiveTab] = useState()

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

  function handleClickTab(selectedButton) {
    // This function will be called when a tab is clicked.
    console.log(`Tab clicked: ${selectedButton}`)
    setActiveTab(selectedButton) // Update the selected tab
  }
  return (
    <>
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
    </>
  )
}
