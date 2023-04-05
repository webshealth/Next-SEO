import Head from "next/head";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export default function Newpage() {
  const router = useRouter();
  return (
    <>
      <main>
        <div className={styles.topnav}>
          <a
            className={styles.active}
            onClick={() => {
              router.push("/ab/");
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              router.push("/search");
            }}
          >
            Search
          </a>
          <a
            onClick={() => {
              router.push("/new-page");
            }}
          >
            New Page
          </a>
          <a
            onClick={() => {
              router.push("/test");
            }}
          >
            Test
          </a>
          <a
            onClick={() => {
              router.push("/marketing");
            }}
          >
            Marketing
          </a>
          <a
            onClick={() => {
              router.push("/about");
            }}
          >
            About
          </a>
        </div>

        <div>
          <h2>Funnel Testing Layout</h2>
        </div>
      </main>
    </>
  );
}
