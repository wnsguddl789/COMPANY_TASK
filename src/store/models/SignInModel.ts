import * as React from 'react';
import { observable, action, makeObservable } from 'mobx';

export default class SignInModel {
  isSignedIn: false;

  constructor() {
    makeObservable(this, {
      isSignedIn: observable,
    });
  }
}
