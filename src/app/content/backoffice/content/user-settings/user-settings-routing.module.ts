import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';

const routes: Route[] = [
  {
    path: '',
    component: UserSettingsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserSettingsRoutingModule {
}
