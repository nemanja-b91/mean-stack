import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../_services/auth-service.service";
import {User} from "../_models/user";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  user: any = [];
  userModel = new User('', '')
  resetPasswordEmail: string = '';
  passwordVisible = false;

  constructor(
    private cookieService: CookieService,
    private authentication: AuthServiceService,
    private router: Router,
    private message: NzMessageService
  ) {
  }

  ngOnInit(): void {

  }

  async resetPassword(): Promise<any> {
    this.isLoading = true;
    const res = {
      email: this.resetPasswordEmail
    };

    let s = new URLSearchParams(Object.entries(res)).toString();
    const resetRes = await this.authentication.resetPassword(s);
    console.log('Res: ', resetRes)
    setTimeout( () => {
      this.isLoading = false
    }, 1000)

  }

  async loginUser(): Promise<any> {
    this.isLoading = true;
    this.user = await this.authentication.login(
      this.userModel.email,
      this.userModel.password
    );

    if(this.user && this.user.errors) {
      // Handle Errors here
      this.message.create('error', this.user.errors.msg);
      this.isLoading = false;
    } else {
      this.message.create('success', 'Logging in...');
      this.router.navigateByUrl('/admin/dashboard' ).then(() => {
        window.location.reload();
      });

    }
  }

}
