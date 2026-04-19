export default function Home({ onNavigate, fragments }) {
  return (
    <>
      <div className="cover">
        <h1>Carnets de Réflexion</h1>
        <p className="subtitle">Pensées, fragments et méditations d'un homme ordinaire</p>
        <p className="author">Marc-André</p>
        <p className="author" style={{ marginTop: '50px' }}>Québec • Tome I</p>
      </div>

      <section>
        <div className="container">
          <h2>Bienvenue</h2>
          <p>
            Ce recueil est un espace de réflexion libre, sans prétention académique. 
            Chaque fragment existe seul, à sa propre heure. Certains se répondent. 
            D'autres se contredisent. C'est ainsi que la pensée vit — en se cherchant, 
            pas en se concluant.
          </p>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <button 
              onClick={() => onNavigate('foreword')}
              style={{
                padding: '12px 30px',
                fontSize: '14px',
                backgroundColor: '#3A2E1E',
                color: '#FAF8F3',
                border: 'none',
                cursor: 'pointer',
                marginRight: '15px',
                letterSpacing: '0.5px',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5A4A32'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3A2E1E'}
            >
              Lire l'avant-propos
            </button>
            <button 
              onClick={() => onNavigate('fragment', 0)}
              style={{
                padding: '12px 30px',
                fontSize: '14px',
                backgroundColor: '#5A4A32',
                color: '#FAF8F3',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#3A2E1E'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#5A4A32'}
            >
              Commencer la lecture
            </button>
          </div>

          <h3 style={{ marginTop: '80px', fontSize: '18px' }}>Fragments disponibles</h3>
          <ul style={{ listStyle: 'none', marginTop: '30px' }}>
            {fragments.map((fragment, fragIdx) => (
              <li key={fragment.id} style={{ marginBottom: '30px' }}>
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate('fragment', fragIdx); }}
                  style={{
                    color: '#5A4A32',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.3s',
                    display: 'block',
                    marginBottom: '10px'
                  }}
                  onMouseOver={(e) => e.target.style.borderBottom = '2px solid #5A4A32'}
                  onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}
                >
                  {fragIdx + 1}. {fragment.title}
                </a>
                <ul style={{ listStyle: 'none', marginLeft: '20px', fontSize: '14px' }}>
                  {fragment.sections.map((section, secIdx) => (
                    <li key={section.id} style={{ marginBottom: '8px' }}>
                      <span 
                        style={{
                          color: '#8B7355',
                          cursor: 'default'
                        }}
                      >
                        {secIdx + 1}. {section.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
