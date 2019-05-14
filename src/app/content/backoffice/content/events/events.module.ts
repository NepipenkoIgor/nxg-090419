import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsService } from './events.service';
import { NgTableDirective } from './ng-table.directive';
import { EventsFilterPipe } from './events-filter.pipe';

@NgModule({
  declarations: [
    EventsComponent,
    NgTableDirective,
    EventsFilterPipe
  ],
  imports: [
    SharedModule,
    EventsRoutingModule
  ],
  providers: [EventsService]
})
export class EventsModule {
}
