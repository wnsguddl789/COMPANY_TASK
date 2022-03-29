import * as React from 'react';
import SignInConsumer from '../modules/SignIn/SignInConsumer';
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SignInConsumer />;
  }
}
