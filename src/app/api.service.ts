import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string="http://165.22.222.20/demo/shreesaidarshan/public/api"

  constructor(private http: HttpClient) { }

  loginPost(data: any) {
    // data.type = this.utilityService.getRoleName(data.role);
    let body = new FormData();
    body.append('email', data.email);
    body.append('type', data.type);
    body.append('password', data.password);
    return this.http.post(`${this.baseUrl}/user-login`, body);
  }
}
