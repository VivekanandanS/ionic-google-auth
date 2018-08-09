import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

@NgModule({
  declarations: [UserPage],
  exports: [UserPage],
  entryComponents: [UserPage],
  imports: [IonicPageModule.forChild(UserPage)],
})
export class UserPageModule { }
