import { Component } from '@angular/core';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', ']']
})
export class AppComponent {
  public drawer: any;

  public setDrawerControl(drawer: any): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }
}

