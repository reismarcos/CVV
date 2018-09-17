import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AjudaPage } from '../ajuda/ajuda';
import { VacinasPage } from '../vacinas/vacinas';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../app/auth.service'; 






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,db: AngularFireDatabase,  private authService: AuthService) {
    this.navCtrl=navCtrl;
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

  onItemClick(vacina){        
    this.navCtrl. push('Infos',{
      vacinaParam : vacina
    });             
  } 

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot('LoginPage');
  }


}
