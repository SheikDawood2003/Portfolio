import { motion } from 'framer-motion'

const badges = [
  { label: 'HTML', top: '4%', left: '-8%', delay: 0 },
  { label: 'CSS', top: '68%', left: '-12%', delay: 0.15 },
  { label: 'JS', top: '82%', left: '68%', delay: 0.3 },
  { label: 'React', top: '2%', left: '66%', delay: 0.45 },
]

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <motion.div
        className="hero-visual-ring"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      <motion.div
        className="hero-visual-frame"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/profile.jpg"
          alt="Sheik Dawood S — portrait photo"
          className="hero-visual-img"
        />
        <span className="hero-visual-tag">
          <span className="status-live-dot" aria-hidden="true" />
          available for hire
        </span>
      </motion.div>

      {badges.map((b) => (
        <motion.span
          key={b.label}
          className="hero-badge"
          style={{ top: b.top, left: b.left }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 + b.delay },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
          }}
        >
          {b.label}
        </motion.span>
      ))}
    </div>
  )
}
