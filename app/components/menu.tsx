import { Project } from '@/types/Project'
import { Article } from '@/types/Article'
import { Social } from '@/types/Social'
import Link from 'next/link'
import styles from './menu.module.css'

type Props = {
    projects: Project[]
    articles: Article[]
}

type SocProps = {
    socials: Social[]
}

export function Left(props: Props) {
    return (
        <div className={styles.leftmenu}>
            <ul className={styles.menulist}>
                <li key="about"><Link href='/about'>About</Link></li>
            </ul>
            {hydrateProjects(props.projects)}
            {hydrateArticles(props.articles)}
        </div>
    )
}

function hydrateProjects(projects: Project[]) {
    return (
        <div>
            <p className={styles.header}>Projects</p>
            <ul className={styles.menulist}>
                {projects.map((project: Project) => 
                    <li key={project._id}><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></li>
                )}
            </ul>
        </div>
    )
}

function hydrateArticles(articles: Article[]) {
    return (
        <div>
            <p className={styles.header}>Articles</p>
            <ul className={styles.menulist}>
                {articles.map((article: Article) => {
                    if (article.unlisted) {
                        return <></>
                    }
                    return (<li key={article._id}><Link href={'/' + article.slug}>{article.title}</Link></li>)
                })}
            </ul>
        </div>
    )
}

export function Bottom(props: SocProps) {
    if (props.socials.length > 0) {
        let elem: JSX.Element[] = [<Link className={styles.req} href={props.socials[0].href}>{props.socials[0].name}</Link>]
        for (let i = 1; i < props.socials.length; i++) {
            elem.push(<>&#183;</>)
            elem.push(<Link className={styles.req} href={props.socials[i].href}>{props.socials[i].name}</Link>)
        }
        return (
            <div className={styles.socialcontainer}>
                {elem}
            </div>
        )
    }
    return (
        <div className={styles.socialcontainer} />
    )
}