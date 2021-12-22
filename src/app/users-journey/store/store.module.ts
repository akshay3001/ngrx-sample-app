import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UsersStoreService } from './store.service';
import * as fromUser from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersStoreService],
})
export class UsersStoreModule {}
