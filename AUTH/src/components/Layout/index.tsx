import Head from 'next/head';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Main,
  Container,
  Header,
  HeaderList,
  HeaderItem,
  ProflieButton,
} from './Layout.style';
import Link from 'next/link';

import RootStore from '../../store/RootStore';

@inject(RootStore.type.SIGNIN_MODEL)
@observer
export default class Layout extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.signInModel.initialSetState();
  }
  render() {
    const { children } = this.props;
    const { isSignedIn, user } = this.props.signInModel;
    return (
      <React.Fragment>
        <Head>
          <title>HI</title>
        </Head>
        <Container>
          <Header>
            <h1>파일럿 프로젝트</h1>
            <HeaderList>
              <HeaderItem>
                <Link href={'/'} passHref>
                  홈
                </Link>
              </HeaderItem>
              {isSignedIn ? (
                <React.Fragment>
                  <HeaderItem>
                    <Link href={'/detail'} passHref>
                      디테일
                    </Link>
                  </HeaderItem>
                  <HeaderItem>
                    <ProflieButton
                      onClick={() => this.props.signInModel.signOutAction()}
                    >
                      <img src={user.avatar} />
                      <span>로그아웃</span>
                    </ProflieButton>
                  </HeaderItem>
                </React.Fragment>
              ) : (
                <HeaderItem>
                  <Link href={'/signIn'} passHref>
                    로그인
                  </Link>
                </HeaderItem>
              )}
            </HeaderList>
          </Header>
          <Main>{children}</Main>
        </Container>
      </React.Fragment>
    );
  }
}
