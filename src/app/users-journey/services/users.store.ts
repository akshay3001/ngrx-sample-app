import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/users.interface';
import { UsersHttpService } from './users-http.service';

export interface UsersState {
  users: User[];
  totalUsers: number;
  loading: boolean;
  error: string;
  selectedUserId?: number;
  selectedUserData?: User;
}

const initialState: UsersState = {
  users: [],
  totalUsers: 0,
  loading: true,
  error: '',
  selectedUserId: 0,
};

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  private readonly error$ = this.select((state) => state.error);
  private readonly loading$ = this.select((state) => state.loading);
  private readonly selectedUserId$ = this.select(
    (state) => state.selectedUserId
  );
  private readonly users$ = this.select((state) => state.users);
  private readonly selectedUserData$ = this.select(
    this.users$,
    this.selectedUserId$,
    (users, selectedUserId) => users.find((user) => user.id === selectedUserId)
  );
  private readonly totalUsers$ = this.select((state) => state.users.length);
  readonly vm$ = this.select(
    this.users$,
    this.totalUsers$,
    this.error$,
    this.loading$,
    this.selectedUserId$,
    this.selectedUserData$,
    (users, totalUsers, error, loading, selectedUserId, selectedUserData) => ({
      users,
      totalUsers,
      error,
      loading,
      selectedUserId,
      selectedUserData,
    })
  );

  constructor(private readonly usersHttpService: UsersHttpService) {
    super(initialState);
  }

  readonly loadUsers$ = this.effect(($) => {
    return $.pipe(
      switchMap(() =>
        this.usersHttpService.users$.pipe(
          tapResponse(
            (users: User[]) => this.addUsersToStore(users),
            (error: HttpErrorResponse) => this.addErrorToStore(error.message)
          )
        )
      )
    );
  });

  readonly setSelectedUserId = this.updater(
    (state: UsersState, selectedUserId: number) => ({
      ...state,
      selectedUserId,
    })
  );

  private addErrorToStore = this.updater(
    (state: UsersState, error: string) => ({
      ...state,
      users: [],
      error,
      loading: false,
    })
  );

  private addUsersToStore = this.updater(
    (state: UsersState, users: User[]) => ({
      ...state,
      users,
      loading: false,
    })
  );
}
