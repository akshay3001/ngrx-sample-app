import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/users.interface';
import { loadUsersFailure, loadUsersSuccess, selectedUser } from './actions';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  error: string;
  selectedUser?: User;
}

export const initialState: State = {
  users: [],
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    error: '',
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    users: [],
    error,
  })),
  on(selectedUser, (state, { selectedUser }) => ({
    ...state,
    selectedUser,
  }))
);
