import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'course-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public addressForm: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    this.addressForm = this._fb.group({
      address: this._fb.array([
        this._fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: [''],
        })
      ])
    });
  }

  public addAddress(): void {
    (this.addressForm.get('address') as FormArray)
      .push(
        this._fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: [''],
        })
      );
  }

  public removeAddress(index: number): void {
    (this.addressForm.get('address') as FormArray).removeAt(index);
  }


}
