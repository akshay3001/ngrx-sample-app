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
  readonly users$ = this.select((state) => state.users);
  readonly totalUsers$ = this.select((state) => state.users.length);
  readonly loading$ = this.select((state) => state.loading);
  readonly error$ = this.select((state) => state.error);
  readonly selectedUserId$ = this.select((state) => state.selectedUserId);
  readonly selectedUserData$ = this.select(
    this.users$,
    this.selectedUserId$,
    (users, selectedUserId) => users.find((user) => user.id === selectedUserId)
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

  private addUsersToStore = this.updater(
    (state: UsersState, users: User[]) => ({
      ...state,
      users,
      loading: false,
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
}
