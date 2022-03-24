import Head from 'next/head';
import * as React from 'react';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>HI</title>
        </Head>
        <main>{children}</main>
      </React.Fragment>
    );
  }
}
