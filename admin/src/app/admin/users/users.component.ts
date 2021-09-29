import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../_services/user-service.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  confirmModal?: NzModalRef; // For testing by now
  allUsers: any = [];
  visible: boolean = false;
  editMode: boolean = false;
  verifying: boolean = false;

  selectedUser: any = [];

  isDeleted: any = false;

  constructor(
    private userService: UserServiceService,
    private modal: NzModalService,
    private message: NzMessageService,
  ) {
  }

  async ngOnInit(): Promise<any> {
    this.allUsers = await this.userService.getUsers()
  }

  closeEditing(): void {
    this.editMode = false;
  }

  closeDetails(): void {
    this.visible = false;
  }

  async verifyUser(id: string): Promise<any> {
    this.verifying = true;
    const data = {
      id: id
    }
    let s = new URLSearchParams(Object.entries(data)).toString();
    const res = await this.userService.verifyUser(s)

    if(res.verified) {
      this.verifying = true;
      this.message.create('success', 'User has been verified');
      await this.ngOnInit();
    }
  }


  viewUserDetails(id: string) {
    this.visible = true;
    this.allUsers.map((user: any) => {
      if (user._id === id) {
        this.selectedUser = user
      }
    })
  }

  deleteSpecificUser(id: string, name: string) {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete this user?',
      nzContent: `You're about to remove ${name} user`,
      nzOnOk: () => new Promise<void>((resolve, reject) => {
        this.isDeleted = this.userService.deleteUser(id);
        if (this.isDeleted) {
          this.ngOnInit();
          resolve();
        }
      }).catch(() => console.log('Oops errors!'))
    });
  }

}
