import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "./_services/auth-service.service";
import {UserServiceService} from "./_services/user-service.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn = false;
  user: any;

  constructor(
    private authService: AuthServiceService,
    private userService: UserServiceService,
    private router: Router,
    private message: NzMessageService
  ) {
  }

  async ngOnInit(): Promise<any> {
    this.isLoggedIn = this.authService.isAuthenticated()
    if(this.isLoggedIn) {
      this.user = await this.userService.getUser();
    } else {
      this.router.navigateByUrl('/login' )
    }
  }
  async logoutUser() {
    const res = await this.authService.logout()
    this.message.create('success', res.message);
    setTimeout(() => {
      this.router.navigateByUrl('/login' ).then(() => {
        window.location.reload();
      });
    }, 1000)
  }
}
