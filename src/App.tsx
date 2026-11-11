import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import EduExp from './pages/EduExp.jsx'
import Spec from './pages/Spec.jsx'
import Projects from './pages/Projects.jsx'
import Skill from './pages/Skill.jsx'
import ContactMe from './pages/ContactMe.jsx'

// Data router: needed so that links with viewTransition get page-change animations
export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutMe /> },
  { path: '/eduexp', element: <EduExp /> },
  { path: '/spec', element: <Spec /> },
  { path: '/projects', element: <Projects /> },
  { path: '/skills', element: <Skill /> },
  { path: '/contactme', element: <ContactMe /> },
  { path: '*', element: <Navigate to="/" replace /> },
])
