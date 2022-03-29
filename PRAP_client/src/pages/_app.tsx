import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/reset.css';
import AppLayout from '../components/AppLayout/AppHeader';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>프랩: 투자상품 가격비교</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
