import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './reducer';

const getUsersState = createFeatureSelector<State>(userFeatureKey);

const selectUsersFromState = ({ users }: State) => users;
export const selectUsers = createSelector(getUsersState, selectUsersFromState);

const selectErrorFromState = ({ error }: State) => error;
export const selectError = createSelector(getUsersState, selectErrorFromState);

const selectedUserFromState = ({ selectedUser }: State) => selectedUser;
export const selectSelectedUser = createSelector(
  getUsersState,
  selectedUserFromState
);
