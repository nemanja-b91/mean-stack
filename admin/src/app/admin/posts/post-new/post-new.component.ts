import {Component, OnInit} from '@angular/core';
import {NewPost} from "../../../_models/post";
import {environment} from "../../../../environments/environment";
import {UserServiceService} from "../../../_services/user-service.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {PostsService} from "../../../_services/posts.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {NzUploadFile} from "ng-zorro-antd/upload";

import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {forkJoin} from "rxjs";


@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  env: string = environment.frontendURL
  placeholder: string = 'https://www.pulsewednesbury.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
  post: NewPost = new NewPost(
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    '',
    '',
    '',
    '',
    0,
    ''
  )
  editorConfig: AngularEditorConfig = {
    editable: true,
    height: '100',
  }
  previewImage: any;
  usersList: any;
  isLoading = false;
  fileUploaded = false;

  form: FormGroup;


  constructor(
    private http: HttpClient,
    private userServices: UserServiceService,
    private postServices: PostsService,
    private message: NzMessageService,
    private router: Router,
    public fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      uploadedImage: [null]
    })
  }


  async ngOnInit(): Promise<any> {
    this.usersList = await this.userServices.getUsers();
  }

  onTitleChange(data: any) {
    let text = data.toLowerCase();
    text = text.split(' ',).join('-').trim()
    this.post.url = this.env + '/blog/' + text
  }

  handleUpload(event: any) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      uploadedImage: file
    });
    // @ts-ignore
    this.form.get('uploadedImage').updateValueAndValidity()
    console.log('File: ', file)
    let reader = new FileReader();
    this.previewImage = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.previewImage = reader.result;
    }
  }
  async onPostCreate(): Promise<any> {
    let formData: any = new FormData();
    // @ts-ignore
    formData.append("uploadedImage", this.form.get('uploadedImage').value);
    const newFile = await this.postServices.uploadFile(formData);
    let filePath = newFile.uploadedFile.path;
    this.post.image = filePath.replace('public/','')
    let post = this.post;
    this.post.url = this.post.url.replace('http://localhost:6001/blog/', '');
    let s = new URLSearchParams(Object.entries(post)).toString();
    const res = await this.postServices.createPost(s)
    if(res.errors) {
      res.errors.msg.map( (err:any) => {
        this.message.create('error', `${err.param} cannot be empty`);
      } )
    } else {
      this.message.create('success', 'Post successfully created!');
      setTimeout(() => {
        this.router.navigate(['/admin/posts'])
      }, 1000)
    }
    console.log('New post: ', res)

  }

}
