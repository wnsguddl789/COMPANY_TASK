import type { AppProps } from 'next/app';
import '../../styles/reset.css';
import AppLayout from '../components/AppLayout/AppHeader';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
