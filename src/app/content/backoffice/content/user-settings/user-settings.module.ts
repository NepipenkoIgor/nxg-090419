import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';

@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    SharedModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
