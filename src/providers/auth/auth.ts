import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { Observable } from 'rxjs/Observable';
import { Object, GoogleAuthResponse } from '../../app/app.types';
@Injectable()
export class AuthProvider {
  private readonly USER: string = 'USER';
  constructor(private google: GooglePlus) {
  }

  public googleAuthentication(): Observable<GoogleAuthResponse> {
    return Observable.create(observer => {
      this.google.login({}).then(user => {
        observer.next(user);
        this.setUser(user);
      }).catch(error => {
        observer.error({});
      });
    });
  }

  public getUser():Object {
    return JSON.parse(localStorage.getItem(this.USER));
  }

  public logOutGoogle(): Observable<any> {
    return Observable.create(observer => {
      this.google.logout().then(res => {
        observer.next({});
        this.removeUser();
      }).catch(err => {
        observer.next({});
        this.removeUser();
      });
    });
  }

  private setUser(user) {
    localStorage.setItem(this.USER, JSON.stringify(user));
  }

  private removeUser() {
    localStorage.removeItem(this.USER);
  }

}
