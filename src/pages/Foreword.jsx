export default function Foreword({ onNavigate }) {
  return (
    <section>
      <div className="container">
        <h2>Avant-propos</h2>

        <p>
          Ce recueil n'est pas né d'une ambition intellectuelle. Il est né d'un besoin — 
          celui de garnir ce qui est le plus fort en moi : l'intégrité et la recherche de la vérité.
        </p>

        <p>
          Et n'est-il pas là le sens de vivre ? N'est-ce pas là, par le fait même, la philosophie — 
          non pas comme une invention de l'homme, mais comme une pulsion qui découle d'être vivant ?
        </p>

        <p>
          Philosopher, ce n'est pas construire des systèmes. C'est refuser de s'endormir. 
          C'est cet inconfort fertile que ressent celui qui ne peut s'empêcher de regarder les choses en face — 
          les siennes, celles des autres, celles du monde.
        </p>

        <p>
          Ces carnets ne prétendent pas à l'exhaustivité ni à la rigueur académique. Ils sont le journal 
          de bord d'un homme ordinaire qui réfléchit trop — et qui assume, désormais, cette étrange vocation 
          comme la plus honnête qu'il ait jamais connue.
        </p>

        <p>
          Les textes ici rassemblés ne forment pas un système. Ils ne s'enchaînent pas selon une logique 
          démonstrative. Chaque fragment existe seul, à sa propre heure. Certains se répondent. D'autres 
          se contredisent. C'est ainsi que la pensée vit — en se cherchant, pas en se concluant.
        </p>

        <p style={{ marginTop: '40px', textAlign: 'right', fontStyle: 'italic' }}>
          — M.-A.
        </p>

        <div className="nav-links" style={{ marginTop: '60px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            ← Retour à l'accueil
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('fragment', 0); }}>
            Commencer les fragments →
          </a>
        </div>
      </div>
    </section>
  )
}
