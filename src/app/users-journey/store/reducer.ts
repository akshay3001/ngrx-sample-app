import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/users.interface';
import { addNewUser, loadUsers, loadUsersFailure, loadUsersSuccess, selectedUser } from './actions';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  error: HttpErrorResponse;
  selectedUser?: User;
  isLoading: boolean;
}

export const initialState: State = {
  users: [],
  error: {} as HttpErrorResponse,
  isLoading: true
};

export const reducer = createReducer(
  initialState,
  on(loadUsers, (state): State => ({
    ...state,
    isLoading: true
  })),
  on(loadUsersSuccess, (state, { users }): State => ({
    ...state,
    users,
    isLoading: false
  })),
  on(loadUsersFailure, (state, { error }): State => ({
    ...state,
    users: [],
    error,
    isLoading: false
  })),
  on(selectedUser, (state, { selectedUser }): State => ({
    ...state,
    selectedUser,
  })),
  on(addNewUser, (state, {user}): State => ({
    ...state,
    users: [...state.users, user]
  }))
);
