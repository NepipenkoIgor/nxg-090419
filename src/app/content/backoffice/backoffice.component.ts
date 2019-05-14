import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public drawer: any;

  public constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot);
    this.activatedRoute.queryParamMap.subscribe((queryMap: ParamMap)=>{
      console.log(queryMap.get('page'))
    })
  }

  public setDrawerControl(drawer: any): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }


}
