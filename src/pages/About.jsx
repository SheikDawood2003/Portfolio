import { FiDownload } from 'react-icons/fi'
import SectionLabel from '../components/SectionLabel.jsx'
import Reveal from '../components/Reveal.jsx'

const strengths = [
  {
    title: 'Full-stack delivery',
    copy: 'Shipped 15+ web modules across real-time production projects during a 6-month internship at Atozerv India.',
  },
  {
    title: 'Secure by design',
    copy: 'Comfortable implementing REST APIs, authentication and role-based access control across full-stack apps.',
  },
  {
    title: 'IoT & embedded systems',
    copy: 'Built two IoT projects — a sign language translator and an automated door locking system — beyond pure web development.',
  },
  {
    title: 'Team player',
    copy: 'Collaborated across two internships to deliver scalable, responsive web solutions in live project environments.',
  },
]

const education = [
  {
    school: 'V.S.B. College of Engineering Technical Campus',
    detail: 'Bachelor of Technology in Information Technology',
    meta: 'CGPA: 8.4',
    period: '2021 – 2025',
  },
  {
    school: 'V.S. Boys Higher Secondary School',
    detail: 'Higher Secondary Certificate (HSC)',
    meta: '84%',
    period: '2020 – 2021',
  },
  {
    school: 'V.S. Boys Higher Secondary School',
    detail: 'Secondary School Leaving Certificate (SSLC)',
    meta: '77%',
    period: '2018 – 2019',
  },
]

const certifications = [
  {
    name: 'Full Stack Web Development Certification',
    issuer: 'Falconx Solutions',
    date: 'July 2023',
  },
  {
    name: 'Web Development Internship Certification',
    issuer: 'Atozerv India Pvt Ltd',
    date: 'November 2025',
  },
]

export default function About() {
  return (
    <section className="page">
      <div className="page-head">
        <SectionLabel>about.jsx</SectionLabel>
        <h1 className="page-title">About Me</h1>
        <p className="page-intro">
          I'm a B.Tech Information Technology graduate with 6+ months of
          hands-on internship experience in full-stack web development —
          proficient in building responsive applications with React JS,
          Spring Boot, Java and MySQL, with a strong understanding of REST
          APIs, role-based access control and IoT systems.
        </p>
      </div>

      <div className="about-grid">
        <Reveal className="about-block">
          <h3 className="about-block-title">Who I am</h3>
          <p>
            Based in Thiruvarur, Tamil Nadu, I've spent the past couple of
            years turning coursework into real, working software — from
            production web modules at Atozerv to independent projects
            spanning full-stack apps, role-based access systems, and IoT.
          </p>
          <p>
            I'm currently looking for a full-time opportunity where I can
            keep building production-grade applications and grow as a
            developer.
          </p>
        </Reveal>

        <Reveal className="about-block" delay={0.1}>
          <h3 className="about-block-title">What I'm looking for</h3>
          <p>
            An entry-level full-stack developer role — ideally working with
            React JS on the frontend and Java/Spring Boot on the backend —
            where I can contribute to production applications and continue
            developing my skills in secure, scalable web development.
          </p>
          <a
            href="/Sheik_Dawood_S_Resume.pdf"
            download="Sheik_Dawood_S_Resume.pdf"
            className="btn btn-ghost btn-small"
          >
            <FiDownload /> Download Resume
          </a>
        </Reveal>
      </div>

      <div className="section-gap">
        <SectionLabel>strengths</SectionLabel>
        <div className="strength-grid">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="strength-card">
              <span className="strength-index">{String(i + 1).padStart(2, '0')}</span>
              <h4>{s.title}</h4>
              <p>{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section-gap">
        <SectionLabel>education</SectionLabel>
        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal key={e.school + e.period} delay={i * 0.08} className="edu-item">
              <div>
                <h4 className="edu-school">{e.school}</h4>
                <p className="edu-detail">{e.detail}</p>
              </div>
              <div className="edu-meta">
                <span className="chip chip-outline">{e.meta}</span>
                <span className="edu-period">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section-gap">
        <SectionLabel>certifications</SectionLabel>
        <div className="cert-list">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className="cert-item">
              <h4>{c.name}</h4>
              <p>{c.issuer} · {c.date}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
