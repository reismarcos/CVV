import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VacinaService } from '../../app/vacina.service';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the VacinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-vacinas',
  templateUrl: 'vacinas.html',
})
export class VacinasPage {
  vacinas;
  constructor(public navCtrl: NavController, private vacinaService: VacinaService, db:AngularFireDatabase) {
    console.log(db);
  }
    

  ngOnInit(){
    this.vacinas = this.vacinaService.fetchVacinas();
  }
  

  onItemClick(vacina){
    this.navCtrl.push('Infos',{
      vacinaParam : vacina // key value pair
    } );
  }

  onAddClick(){
    this.navCtrl.push('Infos'); // for add, don’t pass in any parameters.
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VacinasPage');
  }
  
}
