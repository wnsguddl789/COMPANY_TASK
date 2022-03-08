import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../components/AppLayout';
import wrapper from '../store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(MyApp);
