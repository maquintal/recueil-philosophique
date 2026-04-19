export default function Fragment({ fragment, fragmentIndex, section, sectionIndex, totalSections, onNextSection, onPrevSection, onNavigate }) {
  return (
    <section>
      <div className="container">
        <h2>{fragment.title}</h2>
        <h3>{section.title}</h3>

        {section.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        {sectionIndex === totalSections - 1 && (
          <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '20px', color: '#7A6A52' }}>
            <p>✦  ✦  ✦</p>
          </div>
        )}

        <div className="nav-links" style={{ marginTop: '80px' }}>
          <div>
            {sectionIndex > 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onPrevSection(); }}>
                ← Précédent: {fragment.sections[sectionIndex - 1].title}
              </a>
            )}
            {sectionIndex === 0 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('foreword'); }}>
                ← Avant-propos
              </a>
            )}
          </div>
          <div>
            {sectionIndex < totalSections - 1 && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNextSection(); }}>
                Suivant: {fragment.sections[sectionIndex + 1].title} →
              </a>
            )}
            {sectionIndex === totalSections - 1 && (
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
  )
}
