import { Directive } from '@angular/core';
import { ValidatorService } from '@shared/services/validator.service';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[courseUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator {

  public constructor(private validatorService: ValidatorService) {
  }

  public validate({value}: FormControl): ValidationErrors | null {
    return this.validatorService.usernameValidator(value);
  }

}

