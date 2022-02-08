import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _apiService: ApiService, private route:Router) { }

  ngOnInit() {
  }
  sendData(){
    console.log(this.loginData);

    this._apiService.loginPost(this.loginData).subscribe((result:any)=>{
      console.log(result);
      this.route.navigate(['/home/profile'])
   
    },(error:any)=>{
      console.log(error);
      
    })
  }

}
