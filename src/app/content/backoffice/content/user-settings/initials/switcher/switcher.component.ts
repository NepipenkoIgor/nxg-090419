import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


type Cb = (checked: boolean) => void;

@Component({
  selector: 'course-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public value!: boolean;

  private _onChangeCb!: Cb;

  @HostListener('click')
  public toggle(): void {
    this.value = !this.value;
    this._onChangeCb(this.value);
  }


  public writeValue(checked: boolean): void {
    this.value = checked;
  }

  public registerOnChange(fnControl: Cb): void {
    this._onChangeCb = fnControl;
  }

  public registerOnTouched(fn: Cb): void {
  }
}
