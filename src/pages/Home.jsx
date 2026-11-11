import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <p className="eyebrow">
          Lets Work <span className="accent">Together !</span>
        </p>
        <h1 className="title title--lg">
          Hi From <span className="accent">{profile.name}</span> !<br />
          Interactive Designer &amp; Fullstack
          <br />
          Web Developer
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a
          adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati
          corrupti voluptatem.
        </p>

        <div className="stats">
          <div className="stat">
            <span className="stat__num">3+</span>
            <span className="stat__label">
              Years of
              <br />
              Experience
            </span>
          </div>
          <div className="stat">
            <span className="stat__num">10+</span>
            <span className="stat__label">
              Projects
              <br />
              Completed
            </span>
          </div>
        </div>
      </main>

      <SideMenu />
    </div>
  )
}
