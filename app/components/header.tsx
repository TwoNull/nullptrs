import styles from './header.module.css'
import Link from 'next/link'

export default function Top() {
    return (
        <div className={styles.container}>
            <Link className={styles.req} href='/'>NULL POINTERS©</Link>
            <Link className={styles.opt} href='/'>NULL POINTERS©</Link>
            <Link className={styles.req} href='/'>NULL POINTERS©</Link>
        </div>
    )
}