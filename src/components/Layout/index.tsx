import Head from 'next/head';
import * as React from 'react';

import {
  Main,
  Container,
  Header,
  HeaderList,
  HeaderItem,
} from './Layout.style';
import Link from 'next/link';

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
        <Container>
          <Header>
            <HeaderList>
              <p>파일럿 프로젝트</p>
              <HeaderItem>
                <Link href={'/'} passHref>
                  홈
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href={'/signIn'} passHref>
                  로그인
                </Link>
              </HeaderItem>
            </HeaderList>
          </Header>
          <Main>{children}</Main>
        </Container>
      </React.Fragment>
    );
  }
}
