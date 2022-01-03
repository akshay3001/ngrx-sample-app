import { Component, OnInit } from '@angular/core';
import { UsersStoreService } from '../../store/store.service';

@Component({
  selector: 'app-users-container',
  template: `
    <h1>Users Journey</h1>
    <app-total-users></app-total-users>
    <hr />
    <router-outlet></router-outlet>

    <hr />
    <button (click)="onAddUser()">Add New User</button>
  `,
})
export class UsersContainerComponent implements OnInit {
  constructor(private usersStore: UsersStoreService) {}

  ngOnInit(): void {
    this.usersStore.loadUsers();
  }

  onAddUser() {
    const user = {
      id: 11,
      name: 'Leanne Graham 1',
      username: 'Bret 1',
      email: 'Sincere@april.biz1',
      address: {
        street: 'Kulas Light1',
        suite: 'Apt. 5561',
        city: 'Gwenborough1',
        zipcode: '92998-38741',
        geo: {
          lat: '-37.31591',
          lng: '81.14961',
        },
      },
      phone: '1-770-736-8031 x564421',
      website: 'hildegard.org1',
      company: {
        name: 'Romaguera-Crona1',
        catchPhrase: 'Multi-layered client-server neural-net1',
        bs: 'harness real-time e-markets1',
      },
    };
    this.usersStore.addNewUser(user);
  }
}
