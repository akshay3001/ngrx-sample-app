import { Component, OnInit } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-users-container',
  template: `
    <h1>Users Journey</h1>
    <app-total-users></app-total-users>
    <hr />
    <app-users-list
      [users]="users$ | async"
      [error]="error$ | async"
      [loading]="loading$ | async"
      [totalUsers]="totalUsers$ | async"
    ></app-users-list>
  `,
})
export class UsersContainerComponent implements OnInit {
  error$ = this.usersStore.error$;
  loading$ = this.usersStore.loading$;
  users$ = this.usersStore.users$;
  totalUsers$ = this.usersStore.totalUsers$;

  constructor(private readonly usersStore: UsersStore) {}

  ngOnInit(): void {
    this.usersStore.loadUsers$();
  }
}
