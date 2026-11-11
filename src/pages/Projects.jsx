import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'
import taskApp from '../assets/project-task-app.svg'

export default function Projects() {
  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <h1 className="title title--xl">
          Featured <span className="accent">Projects</span>
        </h1>

        <article className="project">
          <h3 className="project__title">Manage Task App - fullstack web development</h3>
          <p className="text-muted">
            Here&apos;s my latest project built with Next.js and Laravel, using TailwindCSS on the
            front-end. Watch the video to see the responsive landing page in action!
          </p>
          <div className="project__image">
            <img src={taskApp} alt="Manage Task App screenshot" />
          </div>
        </article>
      </main>

      <SideMenu />
    </div>
  )
}
