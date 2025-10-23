
---

# 🧠 Copilot Build Specification — Aleksander Kowalczuk Portfolio Website

> This document defines the **complete structure, design, and tech stack** for Aleksander Kowalczuk’s developer portfolio website.
> GitHub Copilot should use this as the authoritative reference to generate code, components, and styling so the final website
> **matches the attached screenshot and detailed descriptions below**.

---

## 🧩 Overview

**Goal:** Build a modern, responsive, dark-themed personal portfolio for a Full Stack Developer named **Aleksander Kowalczuk**.
It must feature:

* A sleek, minimalist design
* A dark/light theme switcher
* Smooth scroll navigation
* Animated transitions
* Project showcase cards
* Skill progress bars
* A functional contact form

The final result should look **identical** to the provided design screenshot (`nasty-showers-smoke.vly.sh_ (1).png`) and descriptions below.

---

## ⚙️ Tech Stack

**Base Framework:**

* React (TypeScript)
* Vite (development & build)

**Styling:**

* Tailwind CSS (utility-first)
* Custom color palette
* Dark/Light mode via Tailwind `class` strategy

**Animation & UI Enhancements:**

* Framer Motion (for fades, slides, transitions)
* Lucide React (for icons)

**State Management / Utilities:**

* Custom `useTheme()` hook for theme persistence
* React Hook Form (for contact form handling)

**Deployment:**

* Vercel (preferred) or Netlify

**Linting & Code Quality:**

* ESLint + Prettier + TypeScript strict mode

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── profile.jpg
│   ├── projects/
│   │   ├── dircount.png
│   │   ├── codebreaker.png
│   │   ├── swxs.png
│   │   └── ...
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollToSection.ts
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
└── README.md (this file)
```

---

## 🎨 Design Specification

### Color Palette

| Element            | Color     |
| ------------------ | --------- |
| Background (Dark)  | `#0A0A0A` |
| Card Background    | `#151515` |
| Primary Text       | `#FFFFFF` |
| Secondary Text     | `#A0A0A0` |
| Accent Blue        | `#00BFFF` |
| Background (Light) | `#F8F8F8` |
| Light Card         | `#FFFFFF` |

### Font

* **Inter** or **Poppins**
* Import via Google Fonts

### Animations

* Use Framer Motion for all fade-ins and hover glows.
* Smooth scroll behavior for navigation.

---

## 🧭 Header Specification

**Structure:**

```
---------------------------------------------------------------
| Aleksander Kowalczuk     About | Projects | Skills | Contact | 🌙 |
---------------------------------------------------------------
```

* Fixed at top with semi-transparent dark background and slight blur (`backdrop-blur-md`)
* Logo text: **white, bold**
* Navigation links: gray → blue hover, underline animation
* Theme switcher (moon/sun) toggles Tailwind dark class

**Copilot instructions:**

* Generate `Header.tsx` using React + Tailwind
* Add stateful theme toggle using `useTheme()` hook
* Implement smooth scroll to sections via `document.getElementById().scrollIntoView()`
* Add responsive mobile menu (hamburger → drawer)

---

## 🏠 Hero Section

**Text:**

```
Hi, I'm Aleksander
Full Stack Developer & Creative Problem Solver

I build exceptional digital experiences that combine beautiful design with powerful functionality.
Passionate about creating solutions that make a difference.
```

**Buttons:**

* “View My Work” (solid blue)
* “Get In Touch” (outlined blue)
* Centered below text with small spacing
* Add social icons (GitHub, LinkedIn, Email)

**Copilot instructions:**

* Generate `Hero.tsx` using Framer Motion fade-in from opacity 0 → 1
* Tailwind: text-center, min-h-screen flex flex-col justify-center items-center gap-4
* Buttons should have hover animations and focus states

---

## 👤 About Me Section

**Title:**
`About Me`
*Subtitle:* “Passionate developer with a love for creating innovative solutions”

**Layout:**

* Two columns: left = image, right = text
* Dark card background with soft shadows

**Text:**
Use the detailed paragraphs from earlier specification (about 5 years experience, clean code, UI/UX, backend systems).

**Feature Cards (below):**

1. Clean Code
2. Design Focus
3. Performance

Each with blue icon, white title, gray description.

**Copilot instructions:**

* Use CSS grid for layout
* Framer Motion slide from left/right on scroll
* Use Tailwind spacing and font utilities

---

## 💎 Featured Projects

**Title:**
`Featured Projects`
*Subtitle:* “A selection of my recent work and personal projects”

**Tabs:**

* All Projects
* Web Apps
* Mobile
* AI/ML

**Project Cards (examples):**

1. DirCount — Server-side monitoring tool
2. Codebreaker — JS code-breaking game
3. SWXS Launcher — Electron desktop app
4. KeyMaster ESP32-S3 — IoT key system

Each card includes:

* Thumbnail
* Title
* Short description
* Tags (React, Node, etc.)
* Buttons: “Code” / “View Demo”

**Copilot instructions:**

* Use map() to render cards from `projects.ts` data file
* Animate on hover with Framer Motion scale
* Tailwind grid layout with responsive breakpoints

---

## 🧠 Skills & Technologies

**Title:**
`Skills & Technologies`
*Subtitle:* “Tools and technologies I work with regularly”

**Groups:**

* Frontend Development
* Backend Development
* Tools & Technologies

Each skill has a name + progress bar (%).

**Frontend:**
React, Vue, TypeScript, Tailwind, Sass
**Backend:**
Node.js, Python, Java, Spring Boot, MongoDB
**Tools:**
Git, Docker

**Copilot instructions:**

* Generate bars dynamically from `skills.ts`
* Tailwind blue gradient progress with rounded-full ends
* Animate bars filling on scroll (Framer Motion viewport animation)

---

## 💬 Contact Form Section

**Title:**
`Get In Touch`
*Subtitle:* “Have a project or just want to say hi? I’d love to hear from you.”

**Form fields:**

* Name
* Email
* Subject
* Message
* Submit button “Send Message”

**Styling:**

* Centered card with dark background
* Inputs: transparent, gray borders, blue glow on focus
* Submit: blue gradient hover effect

**Copilot instructions:**

* Implement form with React Hook Form
* Validate email & required fields
* On submit, log data (for now) and reset form
* Add success message or toast

---

## ⚫ Footer

**Content:**

```
Portfolio
Building the future, one line of code at a time.

© 2025 Aleksander Kowalczuk. All rights reserved.
```

**Social icons:** GitHub, LinkedIn, Email
**Alignment:** Centered, minimal, gray text
**Background:** Slightly darker than body

---

## 🌗 Theme Switching Logic

**useTheme.ts**

```tsx
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') };
};
```

**Copilot instructions:**

* Apply `.dark` class to `<html>` based on state
* Animate transition between themes (CSS transition duration 300ms)
* Maintain consistent accent blue across themes

---

## 🧱 Tailwind Configuration

```js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF',
        darkBg: '#0A0A0A',
        darkCard: '#151515',
        lightBg: '#F8F8F8',
        lightCard: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

---

## 🚀 Build & Deployment Instructions

1. **Initialize Project**

   ```bash
   npm create vite@latest aleksander-portfolio -- --template react-ts
   cd aleksander-portfolio
   npm install
   ```

2. **Install Dependencies**

   ```bash
   npm install tailwindcss postcss autoprefixer framer-motion react-hook-form lucide-react
   npx tailwindcss init -p
   ```

3. **Configure Tailwind**
   Use config above, import `globals.css` in `main.tsx`.

4. **Run Dev Server**

   ```bash
   npm run dev
   ```

5. **Build for Production**

   ```bash
   npm run build
   ```

6. **Deploy to Vercel**

    * Push repo to GitHub
    * Import project to Vercel
    * Framework preset: **Vite + React**
    * Environment: production

---

## 🧠 Copilot Prompting Guide

When starting the project in VSCode Copilot Chat, feed this file as context and run commands like:

```
/generate component Header.tsx based on README.md header specification
/generate component Hero.tsx using framer motion fade-in animation
/generate data file projects.ts using provided project examples
/generate dark/light mode toggle with useTheme.ts logic
/generate contact form with react-hook-form
```

Copilot should output fully typed `.tsx` components styled with Tailwind, using the provided design rules.

---

## ✅ Final Notes

The finished website must:

* Match the visual layout and color scheme from the reference image
* Use clean, maintainable React components
* Feature responsive design across all devices
* Support smooth dark/light theme transitions
* Include scroll-linked navigation and animated sections

---

© 2025 Aleksander Kowalczuk — Portfolio Specification

---
