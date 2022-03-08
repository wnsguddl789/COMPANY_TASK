import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../components/AppLayout';
import wrapper from '../store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
