import * as React from 'react';
import SignInView from './SignInView';

interface propsTypes {
  viewModel: object;
}
class SignInController extends React.Component {
  constructor(props: propsTypes) {
    super(props);
  }
  render() {
    return <SignInView />;
  }
}

export default SignInController;
