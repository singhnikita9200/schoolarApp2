import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData:any={
    email:'',
    type:'W_MANAGER',
    password:''
  }

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }
  sendData(){
    console.log(this.loginData);

    this._apiService.loginPost(this.loginData).subscribe((result:any)=>{
      console.log(result);
    },(error:any)=>{
      console.log(error);
      
    })
  }

}
