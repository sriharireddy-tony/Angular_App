import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/Shared/api.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UsersListComponent implements OnInit {

  users: any = [];
  searchText: string = '';

  constructor(private service: ApiService, private confirmationService: ConfirmationService, private messageService: MessageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getUsers().subscribe({
      next: (res: any) => {
        this.users = res.users;
      },
      error: ((err: any) => {
        console.log(err)
      })
    })
  }

  clearText() {
    this.searchText = '';
  }
  deleteUser(obj: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastr.success('');
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            break;
          case ConfirmEventType.CANCEL:
            break;
        }
      }
    });
  };

}
