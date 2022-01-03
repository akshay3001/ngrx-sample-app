import { Component, OnInit } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-users-container',
  template: `
    <h1>Users Journey</h1>
    <app-total-users></app-total-users>
    <hr />
    <router-outlet></router-outlet>
  `,
  providers: [UsersStore],
})
export class UsersContainerComponent implements OnInit {
  constructor(private readonly usersStore: UsersStore) {}

  ngOnInit(): void {
    this.usersStore.loadUsers$();
  }
}
