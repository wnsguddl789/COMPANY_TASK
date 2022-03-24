import * as React from 'react';
import { observer } from 'mobx-react';

@observer
class SignInView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>login</div>;
  }
}

export default SignInView;
