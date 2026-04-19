import { fragmentContent } from '../data/fragments'

export default function Fragment({ fragment, fragments, currentIndex, onNext, onPrev, onNavigate }) {
  const content = fragmentContent[fragment.url]

  return (
    <section>
      <div className="container">
        <h2>{fragment.title}</h2>

        {content && content.map((section, idx) => (
          <div key={idx}>
            {section.subtitle && <h3>{section.subtitle}</h3>}
            {section.paragraphs.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
        ))}

        {currentIndex === fragments.length - 1 && (
          <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '20px', color: '#7A6A52' }}>
            <p>✦  ✦  ✦</p>
          </div>
        )}

        <div className="nav-links" style={{ marginTop: '80px' }}>
          <div>
            {currentIndex > 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onPrev(); }}>
                ← Précédent: {fragments[currentIndex - 1].title}
              </a>
            )}
            {currentIndex === 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('foreword'); }}>
                ← Avant-propos
              </a>
            )}
          </div>
          <div>
            {currentIndex < fragments.length - 1 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNext(); }}>
                Suivant: {fragments[currentIndex + 1].title} →
              </a>
            )}
            {currentIndex === fragments.length - 1 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                Retour à l'accueil →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
