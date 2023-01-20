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
        "@type": "Article",
        "@id": "https://test.coinbureau.dev/review/binance/#article",

        author: [
          {
            "@type": "Person",
            name: "Steve Walters",
            description:
              "Steve has been writing for the financial markets for the past 7 years and during that time has developed a growing passion for cryptocurrencies.Steve has been writing for the financial markets for the past 7 years and during that time has developed a growing passion for cryptocurrencies.",
            jobTitle: "Editor",
            url: "https://test.coinbureau.dev/author/steve-cb/",
            sameAs: [
              "https://ckeditor.com/docs/ckeditor5/latest/features/media-embed.html#media-providers",
              "https://jsonformatter.curiousconcept.com/",
              "https://www.npmjs.com/package/underscore",
              "werd12:",
            ],
            knowsAbout: ["HTML, CSS, Blockchain, Crypto"],
            alumniOf: [
              [
                {
                  "@type": "Organization",
                  Name: "University of Ruhuna",
                },
                {
                  "@type": "Organization",
                  Name: "Esoft University",
                },
                {
                  "@type": "Organization",
                  Name: null,
                },
              ],
            ],
          },
        ],
        headline:
          "Binance Review 2023: Pros & Cons and In-Depth Exchange Overview",
        datePublished: "2021-01-13T00:00:00.000Z",
        dateModified: "2023-01-13T06:05:12.780Z",
        // mainEntityOfPage: {
        //   "@id": "https://test.coinbureau.dev/review/binance/",
        // },
        publisher: {
          "@type": "Organization",
          name: "Coin Bureau",
          url: "https://test.coinbureau.dev/",
          logo: {
            "@type": "ImageObject",
            url: "https://s3.coinbureau.dev/coinbureau-logo.jpg",
            width: "1920",
            height: "1080",
          },
          brand: "Coin Bureau",
          publishingPrinciples: "https://test.coinbureau.dev/about/",
          sameAs: [
            "https://twitter.com/coinbureau",
            "https://www.youtube.com/channel/UCqK_GSMbpiV8spgD3ZGloSw",
            "https://www.linkedin.com/company/coin-bureau",
          ],
        },

        thumbnailUrl:
          "https://coinbureau.s3.us-east-2.amazonaws.com/Binance_Ecosystem_jpg_d703e2de06.webp",
        keywords: [
          "binance",
          "binance review",
          "binance exchange",
          "binance legit",
          "binance",
          "binance review",
          "binance exchange",
          "binance",
          "legit",
          "binance",
          "binance review",
          "binance exchange",
          "binance",
          "new keyword",
          " second keyword",
        ],
        articleSection: "Review",
        inLanguage: "en-GB",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* <script type="application/ld+json">{JSON.stringify(schema)}</script> */}
      </Head>
      <main className={styles.main}>
        <div style={{ width: "100%", display: "flex" }}>Test</div>
      </main>
    </>
  );
}
