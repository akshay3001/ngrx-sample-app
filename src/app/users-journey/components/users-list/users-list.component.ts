import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-users-list',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <span (click)="onSelectUser(user)"
          >{{ user.name }} -- {{ user.email }}</span
        >
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users!: User[];
  @Output() selectedUser = new EventEmitter<User>();

  onSelectUser(user: User) {
    this.selectedUser.emit(user);
  }
}
