import SectionLabel from '../components/SectionLabel.jsx'
import Reveal from '../components/Reveal.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  return (
    <section className="page">
      <div className="page-head">
        <SectionLabel>projects.jsx</SectionLabel>
        <h1 className="page-title">Projects</h1>
        <p className="page-intro">
          A mix of full-stack builds, a college website, an accessibility tool
          and an IoT project — each built to learn something specific about
          shipping real software.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="project-card">
            <div className="project-card-top">
              <span className="project-file">{p.file}</span>
              <span className="chip chip-outline">{p.type}</span>
            </div>

            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.description}</p>

            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
