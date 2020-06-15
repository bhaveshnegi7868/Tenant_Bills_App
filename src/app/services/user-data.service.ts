import { Injectable } from '@angular/core';
import { UserData } from 'app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData : UserData[] = []
  constructor() { }
  
  getUserData() {
    console.log(this.userData)
    return  this.userData;
  } 

  setUserData(data:any){
    // localStorage.getItem('userData')
    this.userData.push(data)
    // this.userData.push(JSON.parse(localStorage.getItem('userData')))
    console.log(this.userData)
  }
}
