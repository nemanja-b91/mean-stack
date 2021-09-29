import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PostsService} from "../../../../_services/posts.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  post: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService,
  ) { }

  async ngOnInit(): Promise<any> {
    const slug: any = this.route.snapshot.paramMap.get('id');
    this.post = await this.postService.getPostBySlug(slug);
    console.log(this.post[0])
  }

}
