import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mycontact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //funtion to get allcontacts
   getallcontacts():Observable<Mycontact>{
  return  this.http.get(this.baseUrl)

   }

   //funtion for viewing perticular contact
   viewcontact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
   }


   //funtion for gettting a perticular group name
   getgroupname(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
   }


//funtion for fetch all groups from url groups
getallgroups(){
  return this.http.get('http://localhost:3000/groups')
}

//funtion for adding new contact to baseurl
addcontact(contactbody:any){
 return this.http.post(this.baseUrl,contactbody)

}


//funtion for delete contact
deletecontact(contactId:any){
  this.http.delete(`${this.baseUrl}/${contactId}`)
}

}

