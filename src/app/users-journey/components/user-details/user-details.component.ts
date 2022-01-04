import { Component } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-user-details',
  template: `
    <button routerLink="../list">Back</button>
    <hr />
    <ng-container *ngIf="(vm$ | async)?.selectedUserData as user">
      <h2>Id: {{ user.name }}</h2>
      <h2>Name: {{ user.name }}</h2>
      <h2>Email: {{ user.email }}</h2>
    </ng-container>
  `,
})
export class UserDetailsComponent {
  vm$ = this.usersStore.vm$;

  constructor(private readonly usersStore: UsersStore) {}
}
