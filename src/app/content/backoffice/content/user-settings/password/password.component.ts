import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidatorService } from '@shared/services/validator.service';

@Component({
  selector: 'course-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public changePasswordGroup: FormGroup;

  public constructor(
    private _validatorService: ValidatorService
  ) {
  }


  public ngOnInit(): void {
    // TODO add async validator check password
    this.changePasswordGroup = new FormGroup({
      oldPass: new FormControl('', [Validators.required]),
      password: new FormGroup({
        password: new FormControl('', [Validators.required]),
        cpassword: new FormControl('', [Validators.required])
      }, [this.validate.bind(this)])
    });
  }

  public validate({value}: FormGroup): ValidationErrors | null {
    return this._validatorService.equalValidator(value);
  }

}
