import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allContacts:Mycontact[]=[]
  searchkey:string=''
  constructor(private api:ApiService){}


  ngOnInit():void{
  this.getallcontact()


  }

  getallcontact(){
    this.api.getallcontacts().subscribe((data:any)=>{
      console.log(data);
      this.allContacts=data
      
    })
    
  }
  //search
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value 
  }

  deletecontact(contactId:any){
    this.api.deletecontact(contactId)
    .subscribe((data:any)=>{
      this.getallcontact()
    })
  }

}
