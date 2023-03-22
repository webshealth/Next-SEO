import Head from "next/head";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import * as gtag from "../../lib/gtag";
import Testcomponent from "../../components/testcomponent";

export default function Newpage() {
  const router = useRouter();

  // const handleClick = () => {
  //   // if (typeof window.gtag !== 'undefined') {
  //   gtag.event({
  //     action: 'screen_view',
  //     category: 'a',
  //     label: 'b',
  //     value: 'c',
  //     // debug_mode: true,
  //   });
  //   console.log('Button Click');
  //   // }
  // };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://test.coinbureau.dev/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Videos",
            item: "https://test.coinbureau.dev/videos/",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Testcomponent></Testcomponent>
      <h1>Home Page</h1>
      <div
        className={styles.one}
        onClick={() => {
          router.push("blog");
        }}
      >
        Button One
      </div>
      <p></p>
      <div
        className={styles.two}
        onClick={() => {
          router.push("blog");
        }}
      >
        Button Two
      </div>
      <div className={styles.three}>section one</div>
    </>
  );
}
