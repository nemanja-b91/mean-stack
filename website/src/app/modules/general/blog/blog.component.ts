import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../_services/posts.service";

@Component({
  selector: 'app-about',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class AboutComponent implements OnInit {

  posts: any;
  placeholder: string = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200'

  constructor(
    private postsService: PostsService
  ) {
  }

  async ngOnInit(): Promise<any> {
    const posts = await this.getAllPosts();
  }

  async getAllPosts(): Promise<any> {
    this.posts = await this.postsService.getAllPosts();
  }

}
