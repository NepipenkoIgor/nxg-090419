import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Route[] = [
  {
    path: '',
    component: EventsComponent,
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
export class EventsRoutingModule {
}
