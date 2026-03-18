# Software Developer Portfolio

A modern, professional single-page portfolio website for software developers. Built with React and Vite.

## Features

- **Sticky header** with smooth navigation
- **Hero section** with intro, social links, and tech stack
- **About Me** with download CV button
- **Skills** grid with tech icons
- **What I Do** services section (Frontend, Backend, Cloud, etc.)
- **Portfolio** project showcase
- **Resume** with tabs for Education, Experience, and Skills
- **Testimonials** carousel
- **Blog** section for articles
- **Trusted Clients** section
- **Contact form** with validation
- **Responsive** design for all screen sizes

## Customization

1. **Personal info**: Edit `src/components/Hero.jsx` – update your name, role, bio
2. **Social links**: Update GitHub, LinkedIn, Twitter URLs in Hero and Contact
3. **About**: Edit `src/components/About.jsx` – your story and CV link
4. **Skills**: Modify the `skills` array in `src/components/Skills.jsx`
5. **Projects**: Update `projects` in `src/components/Portfolio.jsx`
6. **Resume**: Edit education/experience in `src/components/Resume.jsx`
7. **Testimonials**: Update `testimonials` in `src/components/Testimonials.jsx`
8. **Contact**: Change email, phone, address in `src/components/Contact.jsx`
9. **Page title**: Update `index.html`

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Add your photo

Replace the placeholder divs in Hero and About with:

```jsx
<img src="/your-photo.jpg" alt="Your Name" className="hero-image" />
```
