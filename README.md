# Student Info App

A simple React web application demonstrating components, props, state, client-side routing, and API data handling.

## Requirements Checklist

### Part A – Project Setup
- [x] React project created with Vite
- [x] Project runs in the browser (`npm run dev`)
- [x] Folder structure: `src/components`, `src/pages`, `src/App.jsx`, `src/main.jsx`

### Part B – Components & Props
- [x] **HeaderComponent** – App title and navigation links
- [x] **StudentComponent** – Displays student name, course, year via props; uses state for expand/collapse; button with event handler

### Part C – Routing
- [x] Client-side routing with **Home** (`/`) and **Students** (`/students`)
- [x] Navigation links in the header

### Part D – API Integration
- [x] Fetches from JSONPlaceholder (users API)
- [x] Data displayed in a list using StudentComponent
- [x] Loading state while fetching
- [x] Error handling message if the API fails

### Part E – Code Quality
- [x] **Proper naming** – PascalCase for components/pages; file names match component names (e.g. `HeaderComponent.jsx` → `HeaderComponent`)
- [x] **Clean, readable code** – Named style constants, JSDoc on components, descriptive variable names (e.g. `student` in `.map()`)
- [x] **Runs without errors** – `npm run dev` and `npm run build` succeed; no linter errors

## How to Run

```bash
cd student-info-app
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. http://localhost:5173).

## Project Structure

```
student-info-app/
├── public/
├── src/
│   ├── components/
│   │   ├── HeaderComponent.jsx
│   │   └── StudentComponent.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── StudentsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vercel.json      # Vercel config (SPA rewrites)
└── vite.config.js
```

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Deploy on Vercel

The project is set up for Vercel with `vercel.json` (SPA rewrites so `/students` and other routes work on refresh).

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. From the project root (`student-info-app`), run:
   ```bash
   vercel
   ```
3. Log in or sign up when prompted; accept defaults (Vercel will detect Vite and use `npm run build` + `dist`).
4. Your app will be live at the URL Vercel prints (e.g. `https://student-info-app-xxx.vercel.app`).

### Option 2: Deploy from Git (GitHub / GitLab / Bitbucket)

1. Push this project to a Git repository.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import the repo; Vercel will auto-detect Vite.
4. Click **Deploy**. Future pushes to the main branch will auto-deploy.
