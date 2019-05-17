import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsService } from './content/backoffice/content/events/events.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL_TOKEN, baseUrl } from './config';
import { InterceptorService } from './interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { CustomPreloadService } from './custom-preload.service';
// NgModule -> es6
//  declarations => let /const
// exports =>  export let/const
//  imports => import
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    CustomPreloadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
