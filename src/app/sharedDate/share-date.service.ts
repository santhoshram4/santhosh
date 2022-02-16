import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDateService {
  message: any;

  constructor() { }
  setMessage(data:any){
    this.message=data
  }
getMessage(){
  return this.message
}
 }
