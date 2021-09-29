import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  token = this.cookieService.get('token');

  constructor(
    private cookieService: CookieService
  ) {
  }

  async getPosts(): Promise<any> {
    try {
      const posts = await fetch(`${environment.backendURL}posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      })

      const resToJson = await posts.json();
      return resToJson.docs;
    } catch (error) {
      console.log('Error', error)
    }
  }
  async uploadFile(data: any): Promise<any> {
    try {
      const newFile = await fetch(`${environment.backendURL}posts/uploadFile`, {
        method: 'POST',
        body: data
      })
      const resToJson = await newFile.json();
      return resToJson;
    } catch(err) {
      console.log('Error: ', err)
    }
  }
  async createPost(data: any): Promise<any> {
    try {
      const newPost = await fetch(`${environment.backendURL}posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' : 'Bearer ' + this.token
        },
        body: data
      })
      const resToJson = await newPost.json();
      return resToJson;
    } catch (error) {
      console.log('Error', error)
    }
  }

  async deletePost(id: string): Promise<any> {
    try {
      const newPost = await fetch(`${environment.backendURL}posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' : 'Bearer ' + this.token
        }
      })
      const resToJson = await newPost.json();
      return resToJson;
    } catch (error) {
      console.log('Error', error)
    }
  }
}
