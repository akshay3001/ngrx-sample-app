import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/users.interface';
import { UsersStoreService } from '../../store/store.service';

@Component({
  selector: 'app-users-list',
  template: `
    <ng-container *ngIf="!(error$ | async); else errorState">
      <ng-container *ngIf="!(isLoading$ | async); else loadingState">
        <ng-container *ngIf="users$ | async as users">
          <ng-container *ngIf="users.length >= 0; else emptyState">
            <ul>
              <li *ngFor="let user of users">
                <h3 (click)="onSelectUser(user)">{{ user.name }}</h3>
              </li>
            </ul>
          </ng-container>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #errorState>
      <h2>Error State Template</h2>
    </ng-template>
    <ng-template #loadingState>
      <h2>Loading State Template</h2>
      <mat-spinner></mat-spinner>
    </ng-template>
    <ng-template #emptyState>
      <h2>Empty State Template</h2>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  users$ = this.usersStore.users$;
  isLoading$ = this.usersStore.isLoading$;
  error$ = this.usersStore.error$;

  constructor(
    private usersStore: UsersStoreService,
    private readonly router: Router
  ) {}

  onSelectUser(user: User) {
    this.usersStore.setSelectedUser(user);
    this.router.navigate(['details']);
  }
}
