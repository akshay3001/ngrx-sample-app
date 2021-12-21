import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersJourneyRoutingModule } from './users-journey-routing.module';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersHttpService } from './services/users-http.service';
import { UsersStoreModule } from './store/store.module';


@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersJourneyRoutingModule,
    UsersStoreModule
  ],
  providers: [UsersHttpService]
})
export class UsersJourneyModule { }
