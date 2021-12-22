import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersStoreService } from '../../store/store.service';

@Component({
  selector: 'app-users-container',
  template: `
    <h2>Users</h2>
    <ng-container *ngIf="users$ | async as users">
      <app-users-list
        [users]="users"
        (selectedUser)="onSelectedUser($event)"
      ></app-users-list>
    </ng-container>

    <ng-container *ngIf="selectedUser$ | async as selectedUser">
      <h3>Selected User: {{ selectedUser.name }}</h3>
    </ng-container>
  `,
})
export class UsersContainerComponent implements OnInit {
  users$ = this.usersStore.users$;
  selectedUser$ = this.usersStore.selectedUser$;

  constructor(private usersStore: UsersStoreService) {}

  ngOnInit(): void {
    this.usersStore.loadUsers();
  }

  onSelectedUser(user: User) {
    this.usersStore.setSelectedUser(user);
  }
}
