import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/users.interface';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-users-list',
  template: `
    <ng-container *ngIf="!error; else errorState">
      <ng-container *ngIf="!loading; else loadingState">
        <ng-container *ngIf="totalUsers! >= 1; else emptyState">
          <ul>
            <li *ngFor="let user of users">
              <h3 (click)="onSelectUser(user.id)">{{ user.name }}</h3>
            </li>
          </ul>
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
  @Input() users!: User[] | null;
  @Input() error!: string | null;
  @Input() loading!: boolean | null;
  @Input() totalUsers!: number | null;

  constructor(
    private readonly usersStore: UsersStore,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onSelectUser(id: number) {
    this.usersStore.setSelectedUserId(id);
    this.router.navigate(['../details'], { relativeTo: this.route });
  }
}
