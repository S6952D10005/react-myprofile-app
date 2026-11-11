import { FaCode, FaGlobe, FaPenNib } from 'react-icons/fa6'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

const specs = [
  {
    title: 'Front-end developer',
    icon: FaCode,
    desc: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
  },
  {
    title: 'UI/UX Designer',
    icon: FaGlobe,
    desc: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
  },
  {
    title: 'Graphic designer',
    icon: FaPenNib,
    desc: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
  },
]

export default function Spec() {
  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <h1 className="title title--xl">
          My <span className="accent">Specializations</span>
        </h1>

        <div className="spec-list">
          {specs.map(({ title, icon: Icon, desc }) => (
            <article key={title} className="spec-card">
              <div className="spec-card__head">
                <h3>{title}</h3>
                <Icon className="accent" />
              </div>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </main>

      <SideMenu />
    </div>
  )
}
