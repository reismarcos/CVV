import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VacinaService } from '../../app/vacina.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../app/auth.service';



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
  userId;
  constructor(public navCtrl: NavController, private vacinaService: VacinaService, db:AngularFireDatabase, private authService: AuthService) {
    console.log(db);
  }
    

  ngOnInit(){
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      this.vacinas = this.vacinaService.fetchVacinas(this.userId);
    });
      
  }
  

  onItemClick(vacina){
    this.navCtrl.push('Infos',{
      vacinaParam : vacina,
      userId : this.userId, // key value pair
    } );
  }

  onAddClick(){
    this.navCtrl.push('Infos',{
      userId : this.userId
    }); // for add, don’t pass in any parameters.
  }

}
