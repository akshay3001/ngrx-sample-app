import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './reducer';

const selectUsersState = createFeatureSelector<State>(userFeatureKey);

const selectUsersFromState = ({ users }: State) => users;
export const selectUsers = createSelector(selectUsersState, selectUsersFromState);

const selectErrorFromState = ({ error }: State) => error;
export const selectError = createSelector(selectUsersState, selectErrorFromState);

const selectedUserFromState = ({ selectedUser }: State) => selectedUser;
export const selectSelectedUser = createSelector(
  selectUsersState,
  selectedUserFromState
);

const isLoadingState = ({ isLoading }: State) => isLoading;
export const selectIsLoading = createSelector(selectUsersState, isLoadingState);
