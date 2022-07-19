import { inject, observer } from 'mobx-react';
import { Router, withRouter } from 'next/router';
import * as React from 'react';
import Layout from '../components/Layout';
import RootStore from '../store/RootStore';
import { RouterType } from '../types';
interface Props {
  signInModel: { isSignedIn: boolean; user: any };
  router: Pick<
    Router,
    | 'push'
    | 'replace'
    | 'reload'
    | 'back'
    | 'prefetch'
    | 'beforePopState'
    | 'events'
    | 'isFallback'
    | 'isReady'
    | 'isPreview'
  >;
}
@inject(RootStore.type.SIGNIN_MODEL)
@observer
class UserDetail extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.signInModel.isSignedIn) {
      this.props.router.push('/');
    }
  }
  render() {
    const { isSignedIn, user } = this.props.signInModel;

    return (
      <Layout>
        {isSignedIn ? (
          <div>
            <img src={user.avatar}></img>
            <p>
              {user.fname} {user.lname}
            </p>
          </div>
        ) : (
          <div>로그인이 안되어있네요</div>
        )}
      </Layout>
    );
  }
}

export default withRouter(UserDetail);
