import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../cd.component';

@Component({
  selector: 'course-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  @Input()
  public person: Person;

  constructor(
    private cd: ChangeDetectorRef
  ) {
 //   this.cd.detach()
  }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.cd.reattach()
    // }, 5000)
  }
}
