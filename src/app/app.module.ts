
//Core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Native Imports
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { PipesModule } from '../pipes/pipes.module';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Providers
import { AuthProvider } from '../providers/auth/auth';
import { UserPageModule } from '../pages/user/user.module';

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), UserPageModule, PipesModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [StatusBar, SplashScreen, GooglePlus, AuthProvider, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
