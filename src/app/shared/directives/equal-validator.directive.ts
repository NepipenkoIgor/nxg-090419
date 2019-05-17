import { Directive } from '@angular/core';
import {  FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorService } from '@shared/services/validator.service';

@Directive({
  selector: '[courseEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true
    }
  ]
})
export class EqualValidatorDirective implements Validator {

  public constructor(private validatorService: ValidatorService) {
  }

  public validate({value}: FormGroup): ValidationErrors | null {
    return this.validatorService.equalValidator(value);
  }
}
