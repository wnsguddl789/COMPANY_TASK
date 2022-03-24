import * as React from 'react';
import { inject } from 'mobx-react';

import SignInController from './SignInController';
import SignInViewModel from './SignInViewModel';
import RootStore from '../../store/RootStore';

@inject(RootStore.type.SIGNIN_MODEL)
export default class SignInConsumer extends React.Component {
  viewModel: SignInViewModel;

  constructor(props) {
    super(props);
    const signInModel = props[RootStore.type.SIGNIN_MODEL];
    this.viewModel = new SignInViewModel(signInModel);
  }
  render() {
    return <SignInController viewModel={this.viewModel} />;
  }
}
