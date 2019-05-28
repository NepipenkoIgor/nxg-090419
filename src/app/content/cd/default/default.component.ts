import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../cd.component';

@Component({
  selector: 'course-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input()
  public person: Person;

  constructor() { }

  ngOnInit() {
  }

}
