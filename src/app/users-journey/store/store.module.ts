import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UsersStoreService } from './store.service';
import * as fromUser from './user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
  ],
  providers: [UsersStoreService]
})
export class UsersStoreModule { }
