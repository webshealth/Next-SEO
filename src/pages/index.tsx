import Head from 'next/head';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';

export default function Newpage() {
  const router = useRouter();

  const handleClick = () => {
    gtag.event({
      action: 'screen_view',
      category: 'myAppName',
      label: 'Home',
      value: 5,
      debug_mode: true,
    });
    console.log('Button Click');
  };

  return (
    <>
      <h1>Home Page</h1>
      <div
        className={styles.one}
        onClick={() => {
          router.push('blog');
          handleClick();
        }}
      >
        Button One
      </div>
      <p></p>
      <div
        className={styles.two}
        onClick={() => {
          router.push('blog');
        }}
      >
        Button Two
      </div>
      <div className={styles.three}>section one</div>
    </>
  );
}
