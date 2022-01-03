import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersStoreService } from '../../store/store.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  selectedUser$ = this.usersStore.selectedUser$;

  constructor(private readonly usersStore: UsersStoreService) {}

  ngOnInit(): void {}
}
