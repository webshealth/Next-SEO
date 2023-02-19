import Head from 'next/head';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';

export default function Newpage() {
  const router = useRouter();

  const handleClick = () => {
    gtag.event({
      action: 'click',
      category: 'button',
      label: 'my-button',
      value: 5,
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <div
        className={styles.one}
        onClick={() => {
          router.push('blog');
          handleClick();
          console.log('Button Click');
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
