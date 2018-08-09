import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Object } from '../../app/app.types';
import * as moment from 'moment';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public userAttributes: Array<Object>
  constructor(public navigation: NavController, public params: NavParams, private auth: AuthProvider) {
    this.userAttributes = new Array<Object>();
  }

  ionViewDidLoad() {
    this.userAttributes = this.params.get('user');
  }

  public logout() {
    this.auth.logOutGoogle().subscribe(response => {
      this.navigation.setRoot(HomePage);
    }, error => {
      alert('Error in communication to Server');
    });
  }

  private getKeyValuesPairs(JSON: Object) {
    let objects: Array<Object> = new Array<Object>();
    for (let key in JSON)
      objects.push(this.analyzeKey(key, JSON));
    return objects;
  }


  private analyzeKey(key: string, JSON: Object): Object {
    let value: string = '';

    switch (key) {
      case 'expires':
        value = moment(JSON[key]).format('DD MMM YY');
        break;
      default:
        value = JSON[key];
        break;
    }
    return { key: key, value: value };
  }


}
