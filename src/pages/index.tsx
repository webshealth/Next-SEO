import Head from 'next/head';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

export default function Newpage() {
  const router = useRouter();
  return (
    <>
      <main>Home Page</main>
    </>
  );
}
