import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() { }

  setItem(key:string, value:object){
    localStorage.setItem(key , JSON.stringify(value));
  }

  getItem(key:string){
    const data =  localStorage.getItem(key) 
    return data ? JSON.parse(data) : null;
  }

}
