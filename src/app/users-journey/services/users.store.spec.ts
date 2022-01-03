import { UsersStore } from './users.store';

describe('UsersStore', () => {
  const componentStore = new UsersStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
