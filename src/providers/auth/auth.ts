import { GoogleAuthResponse, Object } from '../../app/app.types';
import { GooglePlus } from '@ionic-native/google-plus';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 * @author Vivekanandan Sakthivelu
 * @since 09 Aug 2018
 * @description Authentication provider for checking and validating user credentials
 */
@Injectable()
export class AuthProvider {
  private readonly USER: string = 'USER';
  constructor(private google: GooglePlus) {
  }

  //Init Google Authentication
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

  //Retrives user 
  public getUser():Object {
    return JSON.parse(localStorage.getItem(this.USER));
  }

  //Logs user out from the connection
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

  //Set user in storage
  private setUser(user) {
    localStorage.setItem(this.USER, JSON.stringify(user));
  }

  //Clear user info
  private removeUser() {
    localStorage.removeItem(this.USER);
  }

}
