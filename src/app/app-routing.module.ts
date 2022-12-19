import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/contact/admin',pathMatch:'full'
  },
  //path for contact manager component
  {
    path:'contact/admin',component:ContactManagerComponent
  },
  //path for addcontact component
  {
    path:'contact/add',component:AddContactComponent
  },
  //path for updatecontact componet
  {
    path:'contact/edit/:contactId',component:UpdateContactComponent
  },
  //path for viewcontact component
  {
    path:'contact/view/:contactId',component:ViewContactComponent
  },
  //path for pagenotfound component
  {
    path:'**',component:PagenotfoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
