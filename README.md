# Gradmint Technologies — React company profile website

A responsive company profile website built with React and Vite.

## Requirements
- Node.js LTS (includes npm)
- VS Code (recommended)
- Internet connection for Google Fonts (optional; fallback fonts are configured)

## Run on Windows 11
1. Install Node.js LTS from https://nodejs.org/ and restart your terminal.
2. Extract this folder/ZIP.
3. Open the `gradmint-technologies` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:
   ```bash
   npm install
   npm run dev
   ```
6. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in the `dist` folder.

## Customize before publishing
- Update service names, technologies, mission, vision and company copy in `src/App.jsx` to match the company's actual offerings.
- Replace placeholder contact details with verified company email, phone, address and social links.
- The contact form currently validates in the browser and shows a demo confirmation. It does **not** send or store data. Connect a secure backend or an email form provider before using it for real enquiries.
- Add real project case studies, team profiles, testimonials and approved company branding/assets before publishing.
- Review privacy policy, cookie needs, accessibility, SEO metadata and hosting settings before launch.
