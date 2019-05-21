import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { PasswordComponent } from './password/password.component';
import { InitialsComponent } from './initials/initials.component';
import { AddressComponent } from './address/address.component';
import { SwitcherComponent } from './initials/switcher/switcher.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    PasswordComponent,
    InitialsComponent,
    AddressComponent,
    SwitcherComponent
  ],
  imports: [
    SharedModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
