import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AjudaPage } from '../ajuda/ajuda';
import { VacinasPage } from '../vacinas/vacinas';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
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


}
