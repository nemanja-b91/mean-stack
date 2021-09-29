import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL: string = environment.backendURL;
  constructor() { }

  async getAllPosts(): Promise<any> {
    try {
      const posts = await fetch(`${this.URL}posts`, {
        method: 'GET'
      });

      const response = await posts.json();
      return response.docs;
    } catch (error) {
      console.log('Error:', error)
    }
  }
  async getPostBySlug(slug: string): Promise<any> {
    try {
      const posts = await fetch(`${this.URL}posts/single/${slug}`, {
        method: 'GET'
      });

      const response = await posts.json();
      return response;
    } catch (error) {
      console.log('Error:', error)
    }
  }
}
