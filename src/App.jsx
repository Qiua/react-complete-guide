import CoreConcepts from './components/CoreConcepts'
import Examples from './components/Examples'
import Header from './components/Header/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <Footer />
      </main>
    </>
  )
}

export default App
