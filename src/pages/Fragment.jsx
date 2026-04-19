export default function Fragment({ fragment, fragmentIndex, fragments, onNextFragment, onPrevFragment, onNavigate }) {
  return (
    <section>
      <div className="container">
        <h2>{fragment.title}</h2>

        {fragment.sections.map((section, secIdx) => (
          <div key={section.id} style={{ marginBottom: '60px' }}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((para, paraIdx) => (
              <p key={paraIdx}>{para}</p>
            ))}
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '20px', color: '#7A6A52' }}>
          <p>✦  ✦  ✦</p>
        </div>

        <div className="nav-links" style={{ marginTop: '80px' }}>
          <div>
            {fragmentIndex > 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onPrevFragment(); }}>
                ← Précédent: {fragments[fragmentIndex - 1].title}
              </a>
            )}
            {fragmentIndex === 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('foreword'); }}>
                ← Avant-propos
              </a>
            )}
          </div>
          <div>
            {fragmentIndex < fragments.length - 1 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNextFragment(); }}>
                Suivant: {fragments[fragmentIndex + 1].title} →
              </a>
            )}
            {fragmentIndex === fragments.length - 1 && (
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
