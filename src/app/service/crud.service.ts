import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  create_NewUser(record) {
    return this.firestore.collection('userProfile').add(record);
  }
  read_Users() {
    return this.firestore.collection('userProfile').snapshotChanges();
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
