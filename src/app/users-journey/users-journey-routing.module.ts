import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: UsersListComponent },
      { path: 'details', component: UserDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersJourneyRoutingModule {}
