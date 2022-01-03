import { Component } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-user-details',
  template: `
    <button routerLink="../list">Back</button>
    <hr />
    <ng-container *ngIf="selectedUser$ | async as user">
      <h2>Id: {{ user.name }}</h2>
      <h2>Name: {{ user.name }}</h2>
      <h2>Email: {{ user.email }}</h2>
    </ng-container>
  `,
})
export class UserDetailsComponent {
  selectedUser$ = this.usersStore.selectedUserData$;

  constructor(private readonly usersStore: UsersStore) {}
}
