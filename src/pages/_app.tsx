import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

const App = ({ Component, pageProps }: AppProps) => {
  const gtmId = 'GTM-KKTXBRJ';

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
