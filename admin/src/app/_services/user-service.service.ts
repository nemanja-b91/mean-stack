import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: string = this.cookieService.get('token');

  constructor(
    private cookieService: CookieService,
  ) {
  }

  async getUser(): Promise<any> {
    try {
      const userData = await fetch(`${environment.backendURL}profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      })

      const resToJson = await userData.json();
      return resToJson;

    } catch (error) {
      return error;
    }
  }

  async getUsers(): Promise<any> {
    try {
      const usersData = await fetch(`${environment.backendURL}users?limit=100`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application-json',
          'Authorization': 'Bearer ' + this.token
        }
      })
      const resToJson = await usersData.json();
      return resToJson.docs;
    } catch (error) {
      console.log('Error getting users')
      return error;
    }
  }

  async registerUser(data: any): Promise<any> {
    try {
      const newUserData = await fetch(`${environment.backendURL}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.token
        },
        body: data
      })
      const resToJson = await newUserData.json();
      return resToJson;
    } catch (error) {
      console.log('Error getting users')
      return error;
    }
  }
  async verifyUser(data: any): Promise<any> {
    try {
      const newUserData = await fetch(`${environment.backendURL}verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      })
      const resToJson = await newUserData.json();
      return resToJson;
    } catch (error) {
      console.log('Error getting users')
      return error;
    }
  }

  async deleteUser(id: string): Promise<any> {
    try {
      const res = await fetch(`${environment.backendURL}users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
      const resToJson = await res.json();
      return resToJson.docs;
    } catch (error) {
      console.log('Unexpected error!')
      return error;
    }
  }
}
