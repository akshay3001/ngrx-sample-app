import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UsersJourneyRoutingModule } from './users-journey-routing.module';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersHttpService } from './services/users-http.service';
import { UsersStoreModule } from './store/store.module';
import { TotalUsersComponent } from './components/total-users/total-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const materialModules = [MatProgressSpinnerModule];

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersListComponent,
    TotalUsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersJourneyRoutingModule,
    UsersStoreModule,
    ...materialModules,
  ],
  providers: [UsersHttpService],
})
export class UsersJourneyModule {}
