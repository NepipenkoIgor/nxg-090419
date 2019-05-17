import { Directive } from '@angular/core';
import { FormControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorService } from '@shared/services/validator.service';

@Directive({
  selector: '[courseUniqUserValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqUserValidatorDirective,
      multi: true
    }
  ]
})
export class UniqUserValidatorDirective implements Validator {

  public constructor(private validatorService: ValidatorService) {
  }

  public validate({value}: FormControl): ValidationErrors | null {
    return this.validatorService.uniqUsernameValidator(value);
  }

}
