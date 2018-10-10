import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AjudaPage } from '../ajuda/ajuda';
import { Infos } from '../infos/infos';
import { CalendarioPage } from '../calendario/calendario';

import { VacinasPage } from '../vacinas/vacinas';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../app/auth.service'; 
import { VacinaService } from '../../app/vacina.service';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId;
  vacinas;
  constructor(public navCtrl: NavController,db: AngularFireDatabase,  private authService: AuthService,private vacinaService: VacinaService) {
    console.log(db);
  }

  openPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  openVacinas(){
    this.navCtrl.push(VacinasPage);
  }
  openAjuda(){
    this.navCtrl.push(AjudaPage);
  }
  openCalendario(){
    this.navCtrl.push(CalendarioPage);
  }


  ngOnInit(){
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      this.vacinas = this.vacinaService.fetchVacinas(this.userId);
    });
      
  }
  
  logout(){
    this.authService.logout();
    this.navCtrl.setRoot('LoginPage');
  }

}
