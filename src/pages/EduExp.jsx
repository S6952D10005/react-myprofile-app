import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

const timeline = [
  {
    period: '2022 - Present',
    items: [
      { title: 'UI/UX Designer', place: 'Freelance' },
      { title: 'Fullstack Web Developer', place: 'Freelance' },
    ],
  },
  {
    period: '2022 - 2025',
    items: [
      {
        title: 'Bachelor Degree in Technology Digital and Innovation',
        place: 'Southeast Asia University',
      },
    ],
  },
  {
    period: '2016 - 2021',
    items: [{ title: 'High school', place: 'Your High School Name' }],
  },
]

export default function EduExp() {
  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <h1 className="title title--xl">
          Education &amp; <span className="accent">Experience</span>
        </h1>

        <ul className="timeline">
          {timeline.map((group) => (
            <li key={group.period} className="timeline__group">
              <span className="timeline__period">{group.period}</span>
              {group.items.map((item) => (
                <div key={item.title} className="timeline__item">
                  <strong>{item.title}</strong>
                  <span>{item.place}</span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </main>

      <SideMenu />
    </div>
  )
}
