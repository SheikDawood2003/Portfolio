import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import HeroVisual from '../components/HeroVisual.jsx'
import Reveal from '../components/Reveal.jsx'

const stack = ['React JS', 'Spring Boot', 'Java', 'MySQL']

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-visual-col">
          <HeroVisual />
        </div>

        <div className="hero-content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label-slashes">//</span> hello, world
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sheik Dawood S
            <span className="cursor" aria-hidden="true" />
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Web Developer <span className="hero-role-dim">(B.Tech IT Graduate)</span>
          </motion.h2>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            B.Tech Information Technology graduate with 6+ months of hands-on
            internship experience building responsive web applications with
            React JS, Spring Boot, Java and MySQL — with a proven track record
            of shipping real-world production projects.
          </motion.p>

          <motion.div
            className="hero-stack"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects <FiArrowUpRight />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://github.com/SheikDawood2003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sheik-dawood-s-22bbb122a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:sheikdawoodaym1@gmail.com" aria-label="Email" className="social-icon">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>

      <Reveal>
        <div className="hero-quickfacts">
          <div className="quickfact">
            <span className="quickfact-num">4</span>
            <span className="quickfact-label">Projects built</span>
          </div>
          <div className="quickfact">
            <span className="quickfact-num">7mo</span>
            <span className="quickfact-label">Internship experience</span>
          </div>
          <div className="quickfact">
            <span className="quickfact-num">15+</span>
            <span className="quickfact-label">Modules shipped</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
