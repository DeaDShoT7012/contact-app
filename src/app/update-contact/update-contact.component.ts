import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mycontact } from 'src/models/mycontact';
import { Mygroup } from 'src/models/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contactId:string=''
  contact:Mycontact={} as Mycontact
  groups:Mygroup[]=[] as Mygroup[]


  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){}

  ngOnInit(): void {
    //get contact id from url parameter using ActivatedRoute class
    this.activatedRoute.params
    .subscribe((data:any)=>{
    this.contactId = data['contactId']
    console.log(data['contactId']);
    
    })

    //api call
    this.api.viewcontact(this.contactId)
    .subscribe((data:any)=>{
      this.contact=data
      console.log(this.contact);
      
    })

    //call api for getting all groups from service class
    this.api.getallgroups()
    .subscribe((data:any)=>{
      this.groups=data
     
      
    })
  }


  updatecontact(){
    this.api.updatecontact(this.contactId,this.contact)
    .subscribe((data:any)=>{
      this.router.navigateByUrl('')
      
    })
  }
}
