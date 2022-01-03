import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-total-users',
  template: ` <h2>Total Users Count = {{ totalUsers$ | async }}</h2> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalUsersComponent {
  totalUsers$ = this.usersStore.totalUsers$;

  constructor(private readonly usersStore: UsersStore) {}
}
