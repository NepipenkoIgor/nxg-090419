import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CustomPreloadService } from './custom-preload.service';
import { CdComponent } from './content/cd/cd.component';

const routes: Route[] = [
  {
    path: 'login',
    loadChildren: './content/login/login.module',
    canActivate: [AuthGuardService]
  },
  {
    path: 'signup',
    loadChildren: './content/signup/signup.module#SignupModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'backoffice',
    loadChildren: './content/backoffice/backoffice.module#BackofficeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'backoffice',
    loadChildren: './content/backoffice/backoffice.module#BackofficeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'cd',
    component: CdComponent
  },
  {
    path: '**',
    redirectTo: 'backoffice'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
