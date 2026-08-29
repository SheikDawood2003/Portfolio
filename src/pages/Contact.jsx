import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import SectionLabel from '../components/SectionLabel.jsx'
import Reveal from '../components/Reveal.jsx'

const WHATSAPP_NUMBER = '919344519372' // +91 93445 19372, in international format without '+'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Please write a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    // Front-end only: builds a WhatsApp "click to chat" link with the form
    // details pre-filled, then opens it. The visitor still has to hit Send
    // inside WhatsApp themselves — a static site can't send WhatsApp
    // messages on its own without a backend + the WhatsApp Business API.
    const lines = [
      `New portfolio message`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.subject ? `Subject: ${form.subject}` : null,
      ``,
      form.message,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setForm(initialForm)
  }

  return (
    <section className="page">
      <div className="page-head">
        <SectionLabel>contact.jsx</SectionLabel>
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-intro">
          Have an opportunity, a project, or just want to say hi? Fill in the
          form below — it opens WhatsApp with your message ready to send to
          me directly.
        </p>
      </div>

      <div className="contact-grid">
        <Reveal className="contact-info">
          <div className="contact-info-item">
            <FiMail />
            <div>
              <span className="contact-info-label">Email</span>
              <a href="mailto:sheikdawoodaym1@gmail.com">sheikdawoodaym1@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FiPhone />
            <div>
              <span className="contact-info-label">Phone</span>
              <a href="tel:+919344519372">+91 93445 19372</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaWhatsapp />
            <div>
              <span className="contact-info-label">WhatsApp</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                +91 93445 19372
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <FiMapPin />
            <div>
              <span className="contact-info-label">Location</span>
              <span>Thiruvarur, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="contact-socials">
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
          </div>
        </Reveal>

        <Reveal delay={0.1} className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              <FaWhatsapp /> Send via WhatsApp
            </button>

            <p className="form-hint">
              This opens WhatsApp with your message pre-filled — just hit send there.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

