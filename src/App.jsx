import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Foreword from './pages/Foreword'
import Fragment from './pages/Fragment'
import Footer from './components/Footer'
import { fragments } from './data/fragments'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentFragment, setCurrentFragment] = useState(null)
  const [currentSection, setCurrentSection] = useState(null)

  const handleNavigate = (page, fragmentId = null, sectionId = null) => {
    setCurrentPage(page)
    if (fragmentId !== null) {
      setCurrentFragment(fragmentId)
      setCurrentSection(sectionId !== null ? sectionId : 0)
    }
    window.scrollTo(0, 0)
  }

  const handleNextSection = () => {
    const currentFrag = fragments[currentFragment]
    if (currentSection < currentFrag.sections.length - 1) {
      setCurrentSection(currentSection + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <>
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        fragments={fragments}
        currentFragment={currentFragment}
        currentSection={currentSection}
      />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} fragments={fragments} />}
        {currentPage === 'foreword' && <Foreword onNavigate={handleNavigate} />}
        {currentPage === 'fragment' && currentFragment !== null && (
          <Fragment 
            fragment={fragments[currentFragment]}
            fragmentIndex={currentFragment}
            section={fragments[currentFragment].sections[currentSection]}
            sectionIndex={currentSection}
            totalSections={fragments[currentFragment].sections.length}
            onNextSection={handleNextSection}
            onPrevSection={handlePrevSection}
            onNavigate={handleNavigate}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
