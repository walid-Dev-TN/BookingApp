import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  Messages: any;
  Theme: string;
  Message: string;
  UserName: string;
  UserAge: number;
  address: string;
  UserRole: string;
  public user: string;



  constructor( private crudService: CrudService) { }

  ngOnInit() {

       
    this.crudService.read_Messages().subscribe(data => {
 
      this.Messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Theme: e.payload.doc.data()['Theme'],
          Message: e.payload.doc.data()['Message'],
          User: e.payload.doc.data()['User']
        };
      })
      console.log(this.Messages);

  
    });
  }



 

  CreateMessage() {
    let record = {};
    record['Theme'] = this.Theme;
    record['Message'] = this.Message;
    record['User'] = this.user;

    
    this.crudService.create_NewMessage(record).then(resp => {
      
      //this.address = this.address;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

 


}
