import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VacinaService } from '../../app/vacina.service';
import { VacinasPage } from '../vacinas/vacinas';



/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class Infos {
  userId;
  vacina;
  newVacinaFlag = false;
  deleteVacinaFlag = false;
  myDate: String = new Date().toISOString();



  constructor(public navCtrl: NavController, public navParams: NavParams, private vacinaService: VacinaService, private alertCtrl: AlertController) {
    this.vacina = this.navParams.get('vacinaParam');
    this.userId = this.navParams.get('userId');
    this.myDate = new Date().toISOString();

    if(!this.vacina){
      this.vacina = {
      id: '',
      date: '',
      name: '',
      place: '',
      };
      this.newVacinaFlag = true;
      }
  }

  onTrash(){
    let confirm = this.alertCtrl.create({
    title: 'Excluir?',
    message: `Você tem certeza que deseja excluir essa vacina da sua Carteira de Vacinação Virutal?`, // use backtick to insert string desc
    buttons: [
      {
        text: 'Cancelar' // don't do anything when cancel
      },
      {
        text: 'Confirmar',
        handler: () => {
        //this.noteService.removeNote(this.note);
        this.deleteVacinaFlag = true;
        this.navCtrl.pop();
        }
        }
        ]
        });
        confirm.present();

        
  }
  ionViewWillLeave() {
    
    if(this.vacina.title === "" && this.vacina.date === "" && this.vacina.place === ""){      
      // if note is blank don't do anything      
    }
    
    else if(this.deleteVacinaFlag){
      this.vacinaService.removeVacina(this.vacina,this.userId);
      console.log("delete vacina");
    }
      
    
  }

 
  saveVacina(){
    if(this.newVacinaFlag){
      this.vacinaService.addVacina(this.vacina,this.userId);
    }
    else{
      this.vacinaService.editVacina(this.vacina,this.userId);
    }
    this.navCtrl.pop();      
  }
}