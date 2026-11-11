import { useEffect, useState } from 'react'
import { FaReact, FaFigma, FaHtml5, FaGithub } from 'react-icons/fa6'
import { SiNextdotjs, SiJavascript } from 'react-icons/si'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

const skills = [
  { name: 'React', icon: FaReact, percent: 60 },
  { name: 'Figma', icon: FaFigma, percent: 90 },
  { name: 'HTML/CSS', icon: FaHtml5, percent: 60 },
  { name: 'Next.js', icon: SiNextdotjs, percent: 70 },
  { name: 'JavaScript', icon: SiJavascript, percent: 60 },
  { name: 'GitHub', icon: FaGithub, percent: 90 },
]

const SIZE = 100
const STROKE = 4
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function SkillRing({ name, icon: Icon, percent, animate }) {
  // Before animating, the ring is empty (offset = full circumference)
  const offset = animate ? CIRCUMFERENCE * (1 - percent / 100) : CIRCUMFERENCE

  return (
    <div className="skill">
      <div className="skill__ring" role="img" aria-label={`${name} ${percent}%`}>
        <svg className="skill__progress" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
          <circle className="skill__track" cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} />
          <circle
            className="skill__bar"
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="skill__inner">
          <Icon className="skill__icon" aria-hidden="true" />
          <span className="skill__percent">{percent}%</span>
        </div>
      </div>
      <p className="skill__name">{name}</p>
    </div>
  )
}

export default function Skill() {
  const [animate, setAnimate] = useState(false)

  // Start the ring-fill animation once the page has rendered
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <h1 className="title title--xl">
          My <span className="accent">Skills</span>
        </h1>

        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillRing key={skill.name} {...skill} animate={animate} />
          ))}
        </div>
      </main>

      <SideMenu />
    </div>
  )
}
