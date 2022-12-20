import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allgroups:any[]=[]
  contactname:string=''
  contact:Mycontact={} as Mycontact
  constructor(private api:ApiService,private router:Router){}

  ngOnInit():void{
    this.api.getallgroups()
    .subscribe((data:any)=>{
      console.log(data);
      this.allgroups=data
    })

  }

  addcontact(){
    this.api.addcontact(this.contact)
    .subscribe((data:any)=>{
    //navigate to admin page
    this.router.navigateByUrl('')
    })

  }

}
