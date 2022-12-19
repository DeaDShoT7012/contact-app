import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchkey:string,propname:string): any[] {
    const result:any=[]
    if(!allContacts||searchkey==''||propname==''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(contact )
      }
    })
    return result;
  }

}
