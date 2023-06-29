import { getArticles, getProjects, getSocials } from '@/sanity/sanity-utils';
import { Left, Bottom } from './components/menu'
import Scene from './components/scene'
import styles from './page.module.css'

export default async function Home() {
  const [articles, projects, socials] = await Promise.all([getArticles(), getProjects(), getSocials()])

  return (
    <>
      <Scene/>
      <main className={styles.main}>
        <Left articles={articles} projects={projects}/>
      </main>
      <Bottom socials={socials}/>
    </>
  )
}