import { Link, useLocation } from 'react-router-dom'
import { setTransitionDirection } from '../utils/pageTransition'
import type { IconType } from 'react-icons'
import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa6'
import { profile } from '../data/profile'

const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: 'GitHub', href: profile.socials.github, icon: FaGithub },
  { label: 'X', href: profile.socials.x, icon: FaXTwitter },
  { label: 'Instagram', href: profile.socials.instagram, icon: FaInstagram },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: FaLinkedin },
  { label: 'Google', href: profile.socials.google, icon: FaGoogle },
]

// Shared component: the profile card on the left, used by every page
export default function MyCard() {
  const { pathname } = useLocation()
  const firstLetter = profile.name.charAt(0)
  const restOfName = profile.name.slice(1)

  return (
    <aside className="mycard">
      <h2 className="mycard__name">
        <span className="accent">{firstLetter}</span>
        {restOfName}
      </h2>

      <div className="mycard__photo">
        <img src={profile.avatar} alt={profile.name} />
      </div>

      <p className="mycard__id">STU ID: {profile.studentId}</p>
      <p className="mycard__role">{profile.role}</p>

      <ul className="mycard__socials">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      <Link
        to="/contactme"
        viewTransition
        onClick={() => setTransitionDirection(pathname, '/contactme')}
        className="btn btn--primary mycard__hire"
      >
        HIRE ME!
      </Link>
    </aside>
  )
}
