# react-myprofile-app

Portfolio website built with React + Vite (react-router-dom, react-icons)

## Getting started

```bash
npm install
npm run dev
```

## Pages (7 Page Components)

| Path | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/AboutMe.jsx` |
| `/eduexp` | `src/pages/EduExp.jsx` |
| `/spec` | `src/pages/Spec.jsx` |
| `/projects` | `src/pages/Projects.jsx` |
| `/skills` | `src/pages/Skill.jsx` |
| `/contactme` | `src/pages/ContactMe.jsx` |

Shared components: `src/components/MyCard.tsx` and `src/components/SideMenu.tsx`

## Things to change to your own details

- **Name / student ID / social links**: `src/data/profile.ts`
- **Profile photo**: `src/assets/pictures/Profil.png` (to swap it, change the `import avatar` line in `src/data/profile.ts`)
- **Project image**: replace `src/assets/project-task-app.svg` with an image exported from Figma
- **Education history**: `src/pages/EduExp.jsx`

## Deploy

1. Push to GitHub
2. On Vercel, choose Import Project → pick this repo → Deploy (Vercel detects Vite automatically)
3. `vercel.json` already makes routes like `/about` work when the page is refreshed
