import * as React from 'react';
import SignInView from './SignInView';
import { Router, withRouter } from 'next/router';

import {
  PASSWORD_VALIDATE_MIN_LENGTH,
  PASSWORD_VALIDATE_MAX_LENGTH,
  VALIDATE_COMMENT_LIFETIME,
} from '../../util/constant';

interface PropsTypes {
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
  viewModel: ViewModelProps;
}
interface ViewModelProps {
  signInAction: Function;
  store: { isSignedIn: boolean };
}
interface state {
  account: string;
  password: string;
  accountValidateVisible: boolean;
  accountValidateComment: string;
  passwordValidateVisible: boolean;
  passwordValidateComment: string;
}
class SignInController extends React.Component<PropsTypes, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
      accountValidateVisible: false,
      accountValidateComment: '',
      passwordValidateVisible: false,
      passwordValidateComment: '',
    };
  }

  routerBackHandler = () => {
    if (this.props.router) this.props.router.push('/');
  };

  setAccount = (e: { target: { value: string } }) => {
    this.setState({ account: e.target.value });
  };

  setPassword = (e: { target: { value: string } }) => {
    this.setState({ password: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const isPassValidation = this.formValidate();
    if (isPassValidation) {
      this.signInAction();
    }
  };

  signInAction = async () => {
    const result = this.formValidate();
    if (result) {
      this.props.viewModel.signInAction(
        {
          username: this.state.account,
          password: this.state.password,
        },
        this.props.router,
      );
    }
  };

  formValidate = () => {
    const { password } = this.state;
    if (password.length < PASSWORD_VALIDATE_MIN_LENGTH) {
      this.setState({
        passwordValidateVisible: true,
        passwordValidateComment: 'Password Minumnum length is 4 letters..',
      });
      setInterval(() => {
        this.setState({
          passwordValidateVisible: false,
          passwordValidateComment: '',
        });
      }, VALIDATE_COMMENT_LIFETIME);
      return false;
    } else if (password.length > PASSWORD_VALIDATE_MAX_LENGTH) {
      this.setState({
        passwordValidateVisible: true,
        passwordValidateComment: 'Password Maximum length is 15 letters..',
      });
      setInterval(() => {
        this.setState({
          passwordValidateVisible: false,
          passwordValidateComment: '',
        });
      }, VALIDATE_COMMENT_LIFETIME);

      return false;
    } else {
      return true;
    }
  };

  checkSignedRedierctHome() {
    if (this.props.viewModel.store.isSignedIn) {
      alert('이미 로그인햇어요');
      this.props.router.push('/');
    }
  }

  componentDidMount() {
    this.checkSignedRedierctHome();
  }
  render() {
    return (
      <SignInView
        routerBackHandler={this.routerBackHandler}
        submitHandler={this.submitHandler}
        setAccount={this.setAccount}
        setPassword={this.setPassword}
        accountValidateComment={this.state.accountValidateComment}
        accountValidateVisible={this.state.accountValidateVisible}
        passwordValidateComment={this.state.passwordValidateComment}
        passwordValidateVisible={this.state.passwordValidateVisible}
        goBackHandler={undefined}
      />
    );
  }
}

export default withRouter(SignInController);
