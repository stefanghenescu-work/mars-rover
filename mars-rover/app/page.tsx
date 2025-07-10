import Link from 'next/link';
import styles from './page.module.css'

export default async function HomePage() {
  return (
      <div style={{ textAlign: "right" }}>
        <Link href="/photos">
          <button className={styles.button}>
            Photos
          </button>
        </Link>
        <Link href="/puzzle">
          <button className={styles.button}>
            Puzzle
          </button>
        </Link>
      </div>
  );
}
