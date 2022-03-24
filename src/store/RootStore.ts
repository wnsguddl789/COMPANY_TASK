import SignInModel from './models/SignInModel';

export default class RootStore {
  static type = {
    // SIGNIN_MODEL : 'signInModel'
  };
  constructor() {
    // this.signInModel = new SignInModel(RootStore.type.SIGNIN_MODEL))
  }
  getStore = () => {
    // [RootStore.type.SIGNIN_MODEL] : this.signInModel
  };
}
