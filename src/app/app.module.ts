import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { EventsFilterPipe } from './events-filter.pipe';
import { NgTableDirective } from './ng-table.directive';
// NgModule -> es6
//  declarations => let /const
// exports =>  export let/const
//  imports => import


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EventsFilterPipe,
    NgTableDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
