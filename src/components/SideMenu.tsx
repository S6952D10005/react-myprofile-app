import { NavLink, useLocation } from 'react-router-dom'
import { setTransitionDirection } from '../utils/pageTransition'
import type { IconType } from 'react-icons'
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiTarget,
  FiBriefcase,
  FiCode,
  FiMessageSquare,
} from 'react-icons/fi'

const menus: { path: string; label: string; icon: IconType }[] = [
  { path: '/', label: 'Home', icon: FiHome },
  { path: '/about', label: 'About Me', icon: FiUser },
  { path: '/eduexp', label: 'Education & Experience', icon: FiBookOpen },
  { path: '/spec', label: 'Specializations', icon: FiTarget },
  { path: '/projects', label: 'Projects', icon: FiBriefcase },
  { path: '/skills', label: 'Skills', icon: FiCode },
  { path: '/contactme', label: 'Contact Me', icon: FiMessageSquare },
]

// Shared component: the right-hand menu, used by every page.
// The current page's icon turns orange automatically (via NavLink isActive).
export default function SideMenu() {
  const { pathname } = useLocation()

  return (
    <nav className="sidemenu" aria-label="Main menu">
      <ul>
        {menus.map(({ path, label, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              viewTransition
              onClick={() => setTransitionDirection(pathname, path)}
              title={label}
              aria-label={label}
              className={({ isActive }) => (isActive ? 'sidemenu__link is-active' : 'sidemenu__link')}
            >
              <Icon />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
