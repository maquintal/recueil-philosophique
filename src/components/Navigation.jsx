import './Navigation.css'

export default function Navigation({ currentPage, onNavigate, fragments, currentFragment }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className={currentPage === 'home' ? 'active' : ''}
          >
            ACCUEIL
          </a>
        </li>
        <li>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('foreword'); }}
            className={currentPage === 'foreword' ? 'active' : ''}
          >
            AVANT-PROPOS
          </a>
        </li>
        {fragments.map((frag, idx) => (
          <li key={frag.id}>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate('fragment', idx); }}
              className={currentPage === 'fragment' && currentFragment === idx ? 'active' : ''}
              title={frag.title}
            >
              {idx + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
