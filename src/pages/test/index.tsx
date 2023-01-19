import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  interface Item {
    name: string;
    updateDate: string;
  }
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: "https://test.coinbureau.dev/",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://test.coinbureau.dev/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        url: "https://test.coinbureau.dev/",
        logo: "https://s3.coinbureau.dev/coinbureau-logo.jpg",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Test</title>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        /> */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <main className={styles.main}>
        <div style={{ width: "100%", display: "flex" }}>Test</div>
      </main>
    </>
  );
}
