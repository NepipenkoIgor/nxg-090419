import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { CustomPreloadService } from './custom-preload.service';
import { StoreModule } from '@ngrx/store';
import { CustomRouterSerializer, metaReducers, reducer } from './store/reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from '@shared/shared.module';
import { CdComponent } from './content/cd/cd.component';
import { OnPushComponent } from './content/cd/on-push/on-push.component';
import { DefaultComponent } from './content/cd/default/default.component';
// NgModule -> es6
//  declarations => let /const
// exports =>  export let/const
//  imports => import
@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    OnPushComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer
    }),
    SharedModule
  ],
  providers: [
    AuthGuardService,
    CustomPreloadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
