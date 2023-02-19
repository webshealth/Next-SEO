import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import Layout from '../../components/layout';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  // const gtmId = 'GTM-KKTXBRJ';

  // const tagManagerArgs: TagManagerArgs = {
  //   gtmId,
  // };
  const router = useRouter();

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-1GZ3X218E`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1GZ3X218E', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
