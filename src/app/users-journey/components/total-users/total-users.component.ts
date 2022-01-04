import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-total-users',
  template: ` <h2>Total Users Count = {{ (vm$ | async)?.totalUsers }}</h2> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalUsersComponent {
  vm$ = this.usersStore.vm$;

  constructor(private readonly usersStore: UsersStore) {}
}
