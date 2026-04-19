import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Foreword from './pages/Foreword'
import Fragment from './pages/Fragment'
import Footer from './components/Footer'

const FRAGMENTS = [
  { id: 1, title: 'De la querelle de quelques-uns', url: 'querelle' },
  { id: 2, title: 'Du pouvoir et de ceux qui le servent', url: 'pouvoir' },
  { id: 3, title: 'Du système et de la nature humaine', url: 'systeme' },
  { id: 4, title: 'Du piège du « toujours plus »', url: 'toujours-plus' },
  { id: 5, title: 'De la servitude invisible', url: 'servitude' },
  { id: 6, title: 'Du retrait intérieur', url: 'retrait' },
  { id: 7, title: 'De l\'espoir', url: 'espoir' },
]

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
    if (currentFragment < FRAGMENTS.length - 1) {
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
        fragments={FRAGMENTS}
        currentFragment={currentFragment}
      />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} fragments={FRAGMENTS} />}
        {currentPage === 'foreword' && <Foreword onNavigate={handleNavigate} />}
        {currentPage === 'fragment' && currentFragment !== null && (
          <Fragment 
            fragment={FRAGMENTS[currentFragment]}
            fragments={FRAGMENTS}
            currentIndex={currentFragment}
            onNext={handleNextFragment}
            onPrev={handlePrevFragment}
            onNavigate={handleNavigate}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
