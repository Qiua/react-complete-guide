import { CORE_CONCEPTS } from '../data'

import Section from './Section'
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
  return (
    <Section id='core-concepts' title='React Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </Section>
  )
}
