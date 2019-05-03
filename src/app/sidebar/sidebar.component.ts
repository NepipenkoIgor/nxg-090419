import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Output, TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'course-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, AfterContentInit {

  @Output()
  public setSidebarControl: EventEmitter<any> = new EventEmitter();

  @ViewChild('drawer')
  public drawer: any;


  // @ViewChild('container', {read: ViewContainerRef})
  // public container: ViewContainerRef;
  //
  //
  // @ContentChild('myDiv', {read: TemplateRef})
  // public myDiv: TemplateRef<any>;


  public ngAfterViewInit(): void {
    this.setSidebarControl.emit(this.drawer);
    // this.container.createEmbeddedView(this.myDiv);
  }

  public ngAfterContentInit(): void {
    // console.log(this.myDiv);
  }

}
