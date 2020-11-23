import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {



  private NotifSubject = new Subject<Array<any>>();

  constructor(private firestore: AngularFirestore) { }

  create_NewUser(record) {
    return this.firestore.collection('userProfile').add(record);
  }
  read_Users() {
    return this.firestore.collection('userProfile', x => x.where('isAdmin','==',false)).snapshotChanges();
  }

  read_Drivers() {
    return this.firestore.collection('userProfile', x => x.where('isDriver','==',true)).snapshotChanges();
        
  }

  read_New_Reservations_Driver(mail: string, VoyageEnCours: string ): Subject<Array<any>> {
   // return this.firestore.collection('userProfile', x => x.where('Driver','==',mail)).snapshotChanges();
   let Reservations: Array<any> = []; 
   firebase.firestore().collection("ReservationsList").where('Driver', '==', mail)
    .onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
          if( doc.data()['Id_Voyage'] == VoyageEnCours )
          {
            Reservations.push(doc.data());
          }
          this.NotifSubject.next(Reservations);
          
    })
  });
  
  return this.NotifSubject;    
  }
 
  

  create_NewMessage(record) {
    return this.firestore.collection('Messages').add(record);
  }
  read_Messages() {
    return this.firestore.collection('Messages').snapshotChanges();
  }
 
   
  update_User(recordID,record){
    this.firestore.doc('userProfile/' + recordID).update(record);
  }
 
  delete_User(record_id) {
    this.firestore.doc('userProfile/' + record_id).delete();
  }
}
