import SectionLabel from '../components/SectionLabel.jsx'
import Reveal from '../components/Reveal.jsx'
import skills from '../data/skills.js'

export default function Skills() {
  return (
    <section className="page">
      <div className="page-head">
        <SectionLabel>skills.jsx</SectionLabel>
        <h1 className="page-title">Skills</h1>
        <p className="page-intro">
          Technologies I've worked with across coursework, internships and
          personal projects.
        </p>
      </div>

      <div className="skills-groups">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.1} className="skills-group">
            <SectionLabel>{group.category}</SectionLabel>
            <div className="skills-chip-row">
              {group.items.map((item) => (
                <span className="chip chip-lg" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
