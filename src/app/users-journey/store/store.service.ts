import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/users.interface';
import { loadUsers, selectedUser } from './actions';
import { selectError, selectSelectedUser, selectUsers } from './selectors';

@Injectable()
export class UsersStoreService {
  users$ = this.store.select(selectUsers);
  error$ = this.store.select(selectError);
  selectedUser$ = this.store.select(selectSelectedUser);

  constructor(private readonly store: Store) {}

  loadUsers() {
    this.store.dispatch(loadUsers());
  }

  setSelectedUser(user: User) {
    this.store.dispatch(selectedUser({ selectedUser: user }));
  }
}
