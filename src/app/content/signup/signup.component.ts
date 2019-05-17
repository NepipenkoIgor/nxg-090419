import { Component } from '@angular/core';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signup(value: { username: string, email: string, password: string, cpassword: string }) {
    console.log( value);
  }

}
