import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IEvent } from './events.service';

@Directive({
  selector: '[courseNgTable]'
})
export class NgTableDirective implements OnChanges {


  @Input()
  public courseNgTableDelay: number;

  @Input()
  public set courseNgTableBy(_events: IEvent[]) {
    // this._container.clear();
    // events.forEach((event: IEvent, index: number) => {
    //   this._container.createEmbeddedView(this._template, {
    //     $implicit: event,
    //     index,
    //     h: !index ? Object.keys(event) : null
    //   });
    // });
  }

  public constructor(
    private _template: TemplateRef<any>,
    private _container: ViewContainerRef,
  ) {
  }


  public ngOnChanges(changes: SimpleChanges): void {
    const events: IEvent[] = changes.courseNgTableBy.currentValue;
    const delay: number = changes.courseNgTableDelay.currentValue;
    this._container.clear();
    events.forEach((event: IEvent, index: number) => {
      setTimeout(() => {
        this._container.createEmbeddedView(this._template, {
          $implicit: event,
          index,
          h: !index ? Object.keys(event) : null,
          status: true
        });
      }, delay * index);
    });
  }
}
