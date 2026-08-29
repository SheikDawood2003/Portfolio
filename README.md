# Portfolio — React

A responsive, multi-page developer portfolio built with React, React Router and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

## Project structure

```
src/
  components/   Navbar, StatusBar, Reveal (scroll animation), HeroVisual, SectionLabel
  pages/        Home, About, Projects, Experience, Skills, Contact
  data/         projects.js, experience.js, skills.js — edit content here
  index.css     design tokens + all styling
public/
  profile-placeholder.svg   swap this out for your real photo
```

## Customize

- **Your photo** — replace `public/profile-placeholder.svg` with your own image
  (e.g. `profile.jpg`) and update the `src` in `src/components/HeroVisual.jsx`.
- **Name, role, bio, resume link, socials** — edit `src/pages/Home.jsx`, `About.jsx`, `Contact.jsx`.
- **Projects / experience / skills content** — edit the files in `src/data/`.
- **Colors and fonts** — all defined as CSS variables at the top of `src/index.css` under `:root`.

## Contact form

The contact form (`src/pages/Contact.jsx`) validates input, then opens
**WhatsApp** (`wa.me/919344519372`) in a new tab with the visitor's name,
email, subject and message pre-filled — they just tap Send inside WhatsApp.
This is a static-site-friendly approach; a fully automatic "send on submit"
flow would require a backend integrated with the WhatsApp Business API.

To change the destination number, edit `WHATSAPP_NUMBER` at the top of
`Contact.jsx` (international format, digits only, no `+` or spaces).

## Resume download

The "Download Resume" button on the About page links to
`public/Sheik_Dawood_S_Resume.pdf`. Replace that file (keep the same name,
or update the `href`/`download` values in `src/pages/About.jsx`) to update it.

## Tech stack

React 18 · React Router 6 · Framer Motion · react-icons · Vite
