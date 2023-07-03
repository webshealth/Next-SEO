import { useEffect, useState } from "react";
import { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import * as gtag from "../lib/gtag";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import Layout from "../components/layout";
import Head from "next/head";
import useOptimizeAB from "../components/useOptimizeAB";
import Script from "next/script";
import { getCookie, getCookies, hasCookie } from "cookies-next";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import Consent from "@components/consent";

const FEATURES_ENDPOINT = "http://localhost:3100/api/features/key_abc123";

// Create a GrowthBook instance
const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", experiment, result);
  },
});

const App = ({ Component, pageProps, router }: AppProps) => {
  // useEffect(() => {
  //   fetch(FEATURES_ENDPOINT)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       growthbook.setFeatures(json.features);
  //     });

  //   growthbook.setAttributes({
  //     id: "123",
  //     loggedIn: true,
  //     deviceId: "abcdef123456",
  //     employee: true,
  //     company: "acme",
  //     country: "US",
  //     browser: navigator.userAgent,
  //     url: router.pathname,
  //   });
  // }, [router.pathname]);
  const consent = getCookie("localConsent");
  const [newConstent, setNewConstent] = useState(consent);

  console.log(consent, "consent");
  const variant = useOptimizeAB(`${process.env.NEXT_PUBLIC_Experiment_ID}`);

  const gtmId = "GTM-KKTXBRJ";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  // const router = useRouter();

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
            
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
            gtag('event','appJsEvent');
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-PR7FDL7');`,
        }}
      />

      {newConstent === true ? (
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
      {/* <GrowthBookProvider growthbook={growthbook}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </GrowthBookProvider> */}
      <Consent />
    </>
  );
};

export default App;
