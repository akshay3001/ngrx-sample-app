import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersStoreService } from '../../store/store.service';

@Component({
  selector: 'app-users-container',
  template: `
    <h2>Users</h2>
    <h2>Loading = {{ isLoading$ | async }}</h2>
    <h2>Error = {{ (error$ | async)?.message}}</h2>

    <ng-container *ngIf="users$ | async as users">
      <app-users-list
        [users]="users"
        (selectedUser)="onSelectedUser($event)"
      ></app-users-list>
    </ng-container>

    <ng-container *ngIf="selectedUser$ | async as selectedUser">
      <h3>Selected User: {{ selectedUser.name }}</h3>
    </ng-container>

    <hr>
    <button (click)="onAddUser()" >Add New User</button>
  `,
})
export class UsersContainerComponent implements OnInit {
  users$ = this.usersStore.users$;
  selectedUser$ = this.usersStore.selectedUser$;
  isLoading$ = this.usersStore.isLoading$;
  error$ = this.usersStore.error$;

  constructor(private usersStore: UsersStoreService) {}

  ngOnInit(): void {
    this.usersStore.loadUsers();
  }

  onSelectedUser(user: User) {
    this.usersStore.setSelectedUser(user);
  }

  onAddUser() {
    const user = {
      "id": 11,
      "name": "Leanne Graham 1",
      "username": "Bret 1",
      "email": "Sincere@april.biz1",
      "address": {
        "street": "Kulas Light1",
        "suite": "Apt. 5561",
        "city": "Gwenborough1",
        "zipcode": "92998-38741",
        "geo": {
          "lat": "-37.31591",
          "lng": "81.14961"
        }
      },
      "phone": "1-770-736-8031 x564421",
      "website": "hildegard.org1",
      "company": {
        "name": "Romaguera-Crona1",
        "catchPhrase": "Multi-layered client-server neural-net1",
        "bs": "harness real-time e-markets1"
      }
    }
    this.usersStore.addNewUser(user);
  }
}
