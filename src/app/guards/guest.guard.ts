import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean {
    console.log("guest-guard");
    console.log(this.userService.currentUser);
    if (this.userService.currentUser) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
