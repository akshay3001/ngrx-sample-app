import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/users.interface';

export const loadUsers = createAction('[User Journey] Load Users');

export const loadUsersSuccess = createAction(
  '[User Journey] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User Journey] Load Users Failure',
  props<{ error: any }>()
);

export const selectedUser = createAction(
  '[User Journey] Selected User Data',
  props<{ selectedUser: User }>()
);
