import { Component, OnInit } from '@angular/core';
import { UserData } from 'app/models/user-model';
import { FormGroup } from '@angular/forms';
import { UserDataService } from 'app/services/user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: UserData = new  UserData();
  profileForm  = new FormGroup({})
  constructor(private userdata: UserDataService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.userdata.setUserData(this.userData)
    // localStorage.setItem('userData',JSON.stringify(this.userData))
    this.toastr.success("Tenant Details Added Successfully", "",{
      easing: "ease-in",
      easeTime: 500,
      timeOut:2000,
    })
  }
}
