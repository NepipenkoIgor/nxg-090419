import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'course-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent implements OnInit {

  public initialsGroup: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) {
  }


  public ngOnInit(): void {

    this.initialsGroup = this._fb.group({
      name: [''],
      surname: [''],
      male: [false],
    });
  }

}
