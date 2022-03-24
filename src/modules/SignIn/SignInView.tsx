import * as React from 'react';
import { observer } from 'mobx-react';
import {
  SignInContainer,
  SignInLeftContainer,
  SignInRightContainer,
  SignInForm,
  ButtonContainer,
  Button,
} from '../../styles/SignIn';
import Input from '../../components/ui/Input';

interface propsTypes {
  goBackHandler: Function;
  submitHandler: Function;
  setAccount: Function;
  setPassword: Function;
  routerBackHandler: Function;
  accountValidateComment: string;
  accountValidateVisible: boolean;
  passwordValidateComment: string;
  passwordValidateVisible: boolean;
}

@observer
class SignInView extends React.Component<propsTypes> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {
      submitHandler,
      setAccount,
      setPassword,
      accountValidateComment,
      accountValidateVisible,
      passwordValidateComment,
      passwordValidateVisible,
      routerBackHandler,
    } = this.props;
    return (
      <SignInContainer>
        <SignInLeftContainer></SignInLeftContainer>
        <SignInRightContainer>
          <SignInForm onSubmit={submitHandler}>
            <div>
              <h1>SignIn</h1>
              <Input
                label={'Account'}
                type="text"
                visible={accountValidateVisible}
                placeholder="input your Account"
                validateComment={accountValidateComment}
                changeHandeler={setAccount}
              />
              <Input
                label={'Password'}
                type="password"
                visible={passwordValidateVisible}
                placeholder="input your Password"
                validateComment={passwordValidateComment}
                changeHandeler={setPassword}
              />
              <ButtonContainer>
                <Button isSubmit={false} onClick={routerBackHandler}>
                  Back
                </Button>
                <Button isSubmit={true} onClick={submitHandler}>
                  Submit
                </Button>
              </ButtonContainer>
            </div>
          </SignInForm>
        </SignInRightContainer>
      </SignInContainer>
    );
  }
}

export default SignInView;
