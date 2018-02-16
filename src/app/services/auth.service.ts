import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ) { }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ZmFzdHRyYWNrOjU0NzQ5MA=='
    });

    const endpoint: string = this.config.login_url.concat(`?grant_type=password&username=${user.username}&password=${user.password}`);
    return this.apiService.post(endpoint, JSON.stringify(user), loginHeaders).map((res) => {
      console.log(res);
      if (res.access_token) {
        localStorage.setItem('access_token', res.access_token);
      }
      console.log('Login success');
      this.userService.getMyInfo().subscribe();
    });
  }

  signup(user){
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders).map(() =>{
      console.log("Sign up success");
    });
  }
  
  logout() {
    return this.apiService.post(this.config.logout_url, {})
      .map(() => {
        this.userService.currentUser = null;
      });
  }

  changePassowrd(passwordChanger) {
    return this.apiService.post(this.config.change_password_url, passwordChanger);
  }

  static getToken(){
    return localStorage.getItem("access_token");
  }

}