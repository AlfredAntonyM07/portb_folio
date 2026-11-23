# Alfred Antony M — Personal Portfolio

A responsive, recruiter-focused portfolio for a final-year Computer Science and Business Systems student. It presents an interdisciplinary profile across business analysis, data analytics, operations, and technology.

## Features

- Responsive single-page layout with accessible section navigation.
- Profile, career interests, internship, academic projects, skills, education, certifications, and verified achievements.
- Downloadable original resume at `public/Alfred_Antony_Resume.pdf`.
- LinkedIn, GitHub, and email links.
- Contact form with required-field and email validation. It opens the visitor's default email application using a prefilled `mailto:` message; the site does not send or store submissions.
- Original CSS-based project illustrations, SEO metadata, keyboard focus styles, and reduced-motion support.

## Technologies

- React and Vite
- Tailwind CSS v4 (Vite plugin), with custom responsive styling
- Framer Motion for restrained section and hero transitions
- Lucide React icons

## Project structure

```text
public/
  Alfred_Antony_Resume.pdf
  favicon.svg
src/
  components/
    About.jsx
    Achievements.jsx
    CareerInterests.jsx
    Certifications.jsx
    Contact.jsx
    Education.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    SectionHeading.jsx
    Skills.jsx
  App.jsx
  index.css
  main.jsx
.gitignore
index.html
package-lock.json
package.json
vite.config.js
README.md
package.json
```

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://127.0.0.1:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. No GitHub, hosting, or deployment configuration is included.
