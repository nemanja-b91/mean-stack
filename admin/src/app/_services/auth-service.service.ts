import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn = false;
  token = this.cookieService.get('token');

  // isLoggedIn = true;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  isAuthenticated() {
    return !!this.cookieService.get("token");
  }

  async login(email: string, password: string): Promise<any> {
    const user = {
      email: email,
      password: password
    }
    try {
      const response = await fetch(`${environment.backendURL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const resToJson = await response.json();
      if(resToJson.errors) {
        this.isLoggedIn = false
      } else {
        this.cookieService.set('token', resToJson.token);
        this.isLoggedIn = true;
      }
      return resToJson;

    } catch (error) {
      return error;
    }
  }
  async resetPassword(data: any): Promise<any> {
    try {
      const resetPasswordData = await fetch(`${environment.backendURL}forgot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.token
        },
        body: data
      })
      const resToJson = await resetPasswordData.json();
      return resToJson;
    } catch (error) {
      console.log('Error getting users',)
      return error;
    }
  }
  async logout(): Promise<any> {
    this.cookieService.delete('token', '/');
    const response = {
      'message' : 'Logging out..'
    }
    return response;
  }
}
