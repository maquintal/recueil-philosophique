import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ currentPage, onNavigate, fragments, currentFragment, currentSection }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedFragment, setExpandedFragment] = useState(null)

  const handleNavigate = (page, fragmentId = null, sectionId = null) => {
    onNavigate(page, fragmentId, sectionId)
    setIsSidebarOpen(false)
  }

  const toggleFragment = (fragmentId) => {
    setExpandedFragment(expandedFragment === fragmentId ? null : fragmentId)
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
            <li key={fragment.id} className="fragment-item">
              <a 
                href="#"
                onClick={(e) => { 
                  e.preventDefault(); 
                  toggleFragment(fragment.id)
                }}
                className={`nav-link fragment-header ${currentFragment === fragIdx ? 'active' : ''}`}
              >
                <span className="expand-icon">{expandedFragment === fragment.id ? '▼' : '▶'}</span>
                <span>{fragment.title}</span>
              </a>
              
              {expandedFragment === fragment.id && (
                <ul className="section-submenu">
                  {fragment.sections.map((section, secIdx) => (
                    <li key={section.id}>
                      <a 
                        href="#"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavigate('fragment', fragIdx, secIdx)
                        }}
                        className={`nav-link section-link ${currentFragment === fragIdx && currentSection === secIdx ? 'active' : ''}`}
                      >
                        <span className="section-number">{secIdx + 1}</span>
                        <span className="section-title">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
