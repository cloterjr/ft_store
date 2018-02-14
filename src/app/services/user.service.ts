import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  currentUser: any;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {

    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const promise = this.apiService.post(this.config.refresh_token_url, null, loginHeaders).toPromise()
    .then(res => {
      console.log("refresh");
      if (res.access_token !== null) {
        return this.getMyInfo().toPromise()
        .then(user => {
          console.log(user);
          this.currentUser = user;
        });
      }
      else{
        console.log(this.currentUser);
      }
    })
    .catch(() => null);
    return promise;
  }

  resetCredentials() {
    return this.apiService.get(this.config.reset_credentials_url);
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url).map(user => {
      console.log(user);
      this.currentUser = user
    });
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

}
