import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[User Journey] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User Journey] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User Journey] Load Users Failure',
  props<{ error: any }>()
);
