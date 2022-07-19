import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import Layout from '../components/Layout';
import RootStore from '../store/RootStore';

@inject(RootStore.type.SIGNIN_MODEL)
@observer
class Index extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <Layout></Layout>;
  }
}

export default Index;
