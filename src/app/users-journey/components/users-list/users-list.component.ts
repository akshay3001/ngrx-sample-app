import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersStore } from '../../services/users.store';

@Component({
  selector: 'app-users-list',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="!vm.error; else errorState">
        <ng-container *ngIf="!vm.loading; else loadingState">
          <ng-container *ngIf="vm.totalUsers! >= 1; else emptyState">
            <ul>
              <li *ngFor="let user of vm.users">
                <h3 (click)="onSelectUser(user.id)">{{ user.name }}</h3>
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
  vm$ = this.usersStore.vm$;

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
