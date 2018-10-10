import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { VacinaService } from './vacina.service';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

import { AccordionComponent } from '../components/accordion/accordion';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { VacinasPage } from '../pages/vacinas/vacinas';
import { CalendarioPage } from '../pages/calendario/calendario';


export const firebaseConfig = {
  apiKey: "AIzaSyCWgW3m-8CvgRmeaTiq_yDyFYn5575C9lE",
  authDomain: "carteira-de-vacinacao-virtual.firebaseapp.com",
  databaseURL: "https://carteira-de-vacinacao-virtual.firebaseio.com",
  projectId: "carteira-de-vacinacao-virtual",
  storageBucket: "carteira-de-vacinacao-virtual.appspot.com",
  messagingSenderId: "784482572227"
};
  


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    AjudaPage,
    VacinasPage,
    CalendarioPage,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    AjudaPage,
    VacinasPage,
    CalendarioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VacinaService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
