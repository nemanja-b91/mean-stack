import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../_services/user-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any;

  constructor(
    private userService: UserServiceService
  ) {
  }

  async ngOnInit(): Promise<any> {
    this.userData = await this.userService.getUser();
  }

}
