import Head from 'next/head';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

export default function Newpage() {
  const router = useRouter();
  return (
    <>
      <main>
        <div className={styles.topnav}>
          <a
            className={styles.active}
            onClick={() => {
              router.push('/');
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              router.push('search');
            }}
          >
            Search
          </a>
          <a
            onClick={() => {
              router.push('new-page');
            }}
          >
            New Page
          </a>
          <a
            href="#about"
            onClick={() => {
              router.push('test');
            }}
          >
            Test
          </a>
        </div>

        <div>
          <h2>Funnel Testing Layout</h2>
        </div>
      </main>
    </>
  );
}
