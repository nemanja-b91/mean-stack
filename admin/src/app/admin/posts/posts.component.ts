import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../_services/posts.service";
import {UserServiceService} from "../../_services/user-service.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  frontend = environment.frontendURL;
  loading: boolean = false;
  placeholder: string = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200'

  posts: any = [];
  users: any;
  constructor(
    private postsService: PostsService,
    private usersService: UserServiceService
  ) { }

  async ngOnInit(): Promise<any> {
    this.posts = await this.postsService.getPosts()
    this.users = await this.usersService.getUsers()
    const promises = this.posts.map( (item: any) => {
      let user = item.createdBy;
      item.user = this.users.find((x:any) => x._id === user ).name
    } )
    await Promise.all(promises);
  }

  async deletePost(id: string): Promise<any> {
    const res = await this.postsService.deletePost(id);
    console.log('Res: ', res)
    this.ngOnInit();
  }

}
