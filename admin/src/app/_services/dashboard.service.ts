import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  token: string = this.cookieService.get('token');
  constructor(
    private cookieService: CookieService
  ) { }

  // async latestLogin(): Promise<any> {
  //
  //   try {
  //     const newUserData = await fetch(`${environment.backendURL}users`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': 'Bearer ' + this.token
  //       }
  //     })
  //     const resToJson = await newUserData.json();
  //     return resToJson;
  //   } catch(error) {
  //     console.log('Error: ', error)
  //   }
  //
  // }
}
