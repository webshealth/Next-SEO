import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
// import * as gtag from "../lib/gtag";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import Layout from "../components/layout";
import Head from "next/head";
import useOptimizeAB from "../components/useOptimizeAB";
import Script from "next/script";
import { getCookie, getCookies, hasCookie } from "cookies-next";

const App = ({ Component, pageProps }: AppProps) => {
  const consent = getCookie("localConsent");
  const [newConstent, setNewConstent] = useState(consent);

  console.log(consent, "consent");
  const variant = useOptimizeAB(`${process.env.NEXT_PUBLIC_Experiment_ID}`);

  const gtmId = "GTM-KKTXBRJ";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  // <Head>
  //   {/* Global Site Tag (gtag.js) - Google Analytics */}
  //   <script
  //     async
  //     src={`https://www.googletagmanager.com/gtag/js?id=G-1GZ3X218E`}
  //   ></script>
  //   <Script
  //     id="gtag"
  //     strategy="afterInteractive"
  //     dangerouslySetInnerHTML={{
  //       __html: `
  //           window.dataLayer = window.dataLayer || [];
  //           function gtag(){dataLayer.push(arguments);}

  //           gtag('consent', 'default', {
  //             'ad_storage': 'denied',
  //             'analytics_storage': 'denied'
  //           });
  //           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //                     })(window,document,'script','dataLayer','GTM-KKTXBRJ');`,
  //     }}
  //   />
  // </Head>;

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
          
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-PR7FDL7');`,
        }}
      />

      {consent === true ? (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      ) : (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
          `,
          }}
        />
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
