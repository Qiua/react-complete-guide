import { useState } from 'react'
import { EXAMPLES } from '../data'

import Section from './Section'
import Tabs from './Tabs'
import TabButton from './TabButton'

export default function Examples() {
  const [activeTab, setActiveTab] = useState()

  // If a tab is selected, we will display the corresponding content.
  let tabContent = (
    <div id='tab-content'>
      <p>Please select a topic.</p>
    </div>
  )

  if (activeTab) {
    tabContent = (
      <div id='tab-content'>
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
      <Section id='examples' title='Examples'>
        <Tabs
          buttons={
            <>
              <TabButton isSelected={activeTab === 'components'} onClick={() => handleClickTab('components')}>
                Components
              </TabButton>
              <TabButton isSelected={activeTab === 'jsx'} onClick={() => handleClickTab('jsx')}>
                JSX
              </TabButton>
              <TabButton isSelected={activeTab === 'props'} onClick={() => handleClickTab('props')}>
                Props
              </TabButton>
              <TabButton isSelected={activeTab === 'state'} onClick={() => handleClickTab('state')}>
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  )
}
