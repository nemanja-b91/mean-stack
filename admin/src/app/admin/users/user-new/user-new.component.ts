import {Component, OnInit} from '@angular/core';
import {NewUser} from "../../../_models/new-user";
import {UserServiceService} from "../../../_services/user-service.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  isLoading: boolean = false;

  newUserModel = new NewUser(
    '',
    '',
    '',
    '',
    0,
    '',
    '')

  newUser: any;

  constructor(
    private message: NzMessageService,
    private userService: UserServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async registerUser(): Promise<any> {
    this.isLoading = true;
    let newUserData = {
      name: this.newUserModel.name,
      email: this.newUserModel.email,
      password: this.newUserModel.password,
      role: this.newUserModel.role,
      phone: this.newUserModel.phone,
      city: this.newUserModel.city,
      country: this.newUserModel.country,
    }
    // @ts-ignore
    let s = new URLSearchParams(Object.entries(newUserData)).toString();
    // console.log(s);

    this.newUser = await this.userService.registerUser(s)
    if(this.newUser.errors) {
      const errors = this.newUser.errors;
      this.message.create('error', this.newUser.errors.msg);
      console.log(this.newUser.errors)
    } else {
      this.message.create('success', 'User successfully created!');
      setTimeout(() => {
        this.router.navigate(['/admin/users'])
      }, 1000)
    }

    this.isLoading = false
  }

}
