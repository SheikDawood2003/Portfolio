import SectionLabel from '../components/SectionLabel.jsx'
import Reveal from '../components/Reveal.jsx'
import experience from '../data/experience.js'

export default function Experience() {
  return (
    <section className="page">
      <div className="page-head">
        <SectionLabel>experience.jsx</SectionLabel>
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          Two internships that gave me hands-on, team-based experience with
          full-stack development.
        </p>
      </div>

      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.1} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {i !== experience.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-card">
              <span className="chip chip-outline">{e.period}</span>
              <h3 className="timeline-role">{e.role}</h3>
              <p className="timeline-company">{e.company} · {e.location}</p>
              <p className="timeline-duration">{e.duration}</p>
              <ul className="timeline-list">
                {e.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
