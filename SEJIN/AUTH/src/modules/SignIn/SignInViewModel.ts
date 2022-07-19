import * as React from 'react';

export default class SignInViewModel {
  store: any;
  constructor(signInStore: any) {
    this.store = signInStore;
  }

  signInAction = (
    userData: { username: string; password: string },
    router: any,
  ) => {
    this.store.signInAction(userData, router);
  };
  signOutAction = () => {
    this.store.signOutAction();
  };
  initialSetState = () => {
    this.store.initialSetState();
  };
}
