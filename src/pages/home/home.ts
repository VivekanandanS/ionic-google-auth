import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthProvider } from '../../providers/auth/auth';
import { UserPage } from '../user/user';
import { Object } from '../../app/app.types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private auth: AuthProvider, private navgiation: NavController) {
    let user = this.auth.getUser();
    if (!user)
      return;
    this.openUserPage(user);
  }

  ionViewDidLoad() {
   
  }


  public googleAuth() {
    this.auth.googleAuthentication().subscribe(user => {
      this.openUserPage(user);
    }, err => {
      alert('Error in communicating with server');
    });
  }

  private openUserPage(user: Object) {
    this.navgiation.setRoot(UserPage, { user: user });
  }

}
