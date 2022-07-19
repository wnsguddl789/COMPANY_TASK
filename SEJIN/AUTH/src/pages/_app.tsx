import * as React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';
import '../styles/reset.css';
import RootStore from '../store/RootStore';

const rootStore = new RootStore();

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...rootStore.getStore()}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
