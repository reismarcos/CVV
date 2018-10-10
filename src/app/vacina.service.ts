import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class VacinaService{    
  vacinas;

  constructor(private storage : Storage, private db: AngularFireDatabase){      
  }  

  fetchVacinas(userId){   
    return this.db.list('/vacinas/' + userId);     
  }  

  removeVacina(vacina, userId){
    this.db.object('/vacinas/'+userId+'/'+vacina.$key).remove()
      .then( x=> console.log("SUCCESS"))
      .catch( error => {
        alert("Could not delete note.");
        console.log("ERROR", error)
      });
  }

  addVacina(vacina, userId){    
    this.db.list('/vacinas/'+userId).push({   
        name: vacina.name,             
        place: vacina.place,
        date: vacina.date        
    });   
   
  } 

  editVacina(vacina,userId){
    this.db.object('/vacinas/'+userId+vacina.$key).update({
        name: vacina.name,             
        place: vacina.place,
        date: vacina.date        
    });                
  }  
}