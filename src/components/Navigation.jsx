import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ currentPage, onNavigate, fragments, currentFragment }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleNavigate = (page, fragmentId = null) => {
    onNavigate(page, fragmentId)
    setIsSidebarOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <button 
          className="menu-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
        <h1 className="navbar-title">RECUEIL PHILOSOPHIQUE</h1>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              ACCUEIL
            </a>
          </li>
          <li>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavigate('foreword'); }}
              className={`nav-link ${currentPage === 'foreword' ? 'active' : ''}`}
            >
              AVANT-PROPOS
            </a>
          </li>
          <li className="menu-divider"></li>
          
          {fragments.map((fragment, fragIdx) => (
            <li key={fragment.id}>
              <a 
                href="#"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigate('fragment', fragIdx)
                }}
                className={`nav-link fragment-link ${currentFragment === fragIdx ? 'active' : ''}`}
              >
                <span className="fragment-number">{fragIdx + 1}</span>
                <span className="fragment-title">{fragment.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
