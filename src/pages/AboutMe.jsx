import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

export default function AboutMe() {
  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <p className="eyebrow">
          About <span className="accent">Me</span>
        </p>
        <h1 className="title title--lg">
          I find fulfillment in blending visual design with the power of coding to create
          meaningful experiences.
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a
          adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati
          corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum
          voluptates obcaecati corrupti voluptatem.
        </p>
      </main>

      <SideMenu />
    </div>
  )
}
