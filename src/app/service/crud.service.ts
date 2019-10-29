import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  create_NewStudent(record) {
    return this.firestore.collection('Passagers').add(record);
  }
  read_Students() {
    return this.firestore.collection('Passagers').snapshotChanges();
  }

  create_NewMessage(record) {
    return this.firestore.collection('Messages').add(record);
  }
  read_Messages() {
    return this.firestore.collection('Messages').snapshotChanges();
  }
 
  
 
  update_Student(recordID,record){
    this.firestore.doc('Passagers/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Passagers/' + record_id).delete();
  }
}
