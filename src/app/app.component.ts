import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MockData } from './mock/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    console.log("AppComponent Init");
    MockData.loadData();
    // this.authService = this.authService.userAuthenticatedEmitter.subscribe(authenticated=>{
    //   // this.validateMenuPermission();
    // });
  }

  // validateMenuPermission() : {

  // }
}
