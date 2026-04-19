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

  const handleNavigate = (page, fragmentId = null) => {
    setCurrentPage(page)
    if (fragmentId !== null) {
      setCurrentFragment(fragmentId)
    }
    window.scrollTo(0, 0)
  }

  const handleNextFragment = () => {
    if (currentFragment < fragments.length - 1) {
      setCurrentFragment(currentFragment + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevFragment = () => {
    if (currentFragment > 0) {
      setCurrentFragment(currentFragment - 1)
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
      />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} fragments={fragments} />}
        {currentPage === 'foreword' && <Foreword onNavigate={handleNavigate} />}
        {currentPage === 'fragment' && currentFragment !== null && (
          <Fragment 
            fragment={fragments[currentFragment]}
            fragmentIndex={currentFragment}
            fragments={fragments}
            onNextFragment={handleNextFragment}
            onPrevFragment={handlePrevFragment}
            onNavigate={handleNavigate}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
