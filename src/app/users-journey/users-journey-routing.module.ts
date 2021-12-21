import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersContainerComponent } from './components/users-container/users-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: UsersContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersJourneyRoutingModule { }
