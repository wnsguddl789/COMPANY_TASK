import { observable, action, makeObservable } from 'mobx';
import axios from 'axios';

import { BACKEND_END_POINT } from '../../util/constant';
import { isUndefined } from '../../util/function';

export default class SignInModel {
  isSignedIn: boolean;
  user: {};

  constructor(ModelType: string) {
    makeObservable(this, {
      isSignedIn: observable,
      user: observable,
      initialSetState: action,
      signInAction: action,
      signOutAction: action,
    });
    this.isSignedIn = isUndefined(this.isSignedIn) ? false : this.isSignedIn;
  }

  initialSetState = () => {
    if (window.sessionStorage.getItem('isSignedIn')) {
      this.isSignedIn = JSON.parse(window.sessionStorage.getItem('isSignedIn'));
    }
    if (window.sessionStorage.getItem('user')) {
      this.user = JSON.parse(window.sessionStorage.getItem('user'));
    }
  };

  signInAction = async (
    userData: { username: string; password: string },
    router: any,
  ) => {
    await axios({
      url: `${BACKEND_END_POINT}/login`,
      method: 'post',
      data: userData,
    })
      .then((res) => {
        if (res.status === 200) {
          this.user = res.data.user;
          this.isSignedIn = true;
          window.sessionStorage.setItem('user', JSON.stringify(this.user));
          window.sessionStorage.setItem('isSignedIn', String(this.isSignedIn));
          alert('로그인성공');

          router.push('/');
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  signOutAction = () => {
    const result = confirm('진짜 로그아웃?');
    if (result) {
      this.isSignedIn = false;
      this.user = {};
      window.sessionStorage.removeItem('isSignedIn');
      window.sessionStorage.removeItem('user');
    } else {
      alert('그래요 잘 생각했어요.');
    }
  };
}
