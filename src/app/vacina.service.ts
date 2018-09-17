import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class VacinaService{    

  // copy notes data from home page 
  notes;

  constructor(private storage : Storage, private db: AngularFireDatabase){      
  }  

  fetchVacinas(){   
    return this.db.list('/vacinas/');
    /*     
    return this.storage.get('notes') // returns a promise which returns data or error    
      .then(
        (notes) => {
        // assign to this.expenses only if not null. When first //strt, can be null. If null, assign empty array []
          notes? this.notes = notes : this.notes = [];                                                      
      })  
      .catch(
        err => console.log(err)
      );   
      */               
  }  

  removeVacina(vacina){
    this.db.object('/vacinas/'+vacina.$key).remove()
      .then( x=> console.log("SUCCESS"))
      .catch( error => {
        alert("Could not delete note.");
        console.log("ERROR", error)
      });

    /*
      let index = this.notes.indexOf(note);
      if(index > -1){
        this.notes.splice(index,1);
        this.writeToStorage();
      }
      */
  }

  addVacina(vacina){    
    this.db.list('/vacinas/').push({   
        name: vacina.name,             
        place: vacina.place,
        date: vacina.date        
    });   

    //this.notes.push(note);
    //this.writeToStorage();        
  } 

  editVacina(vacina){
    this.db.object('/vacinas/'+vacina.$key).update({
        name: vacina.name,             
        place: vacina.place,
        date: vacina.date        
    });                
  }  
}