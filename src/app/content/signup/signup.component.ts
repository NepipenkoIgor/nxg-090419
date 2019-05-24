import { Component } from '@angular/core';
import { IRootStore } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { SignUpPending } from '../../store/actions/auth.actions';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public constructor(
    private store: Store<IRootStore>
  ) {
  }

  public signup(value: {
    username: string,
    email: string,
    password: { password: string, cpassword: string }
  }): void {
    const {password: passwordGroup, ...user} = value;
    this.store.dispatch(new SignUpPending({...user, password: passwordGroup.password}));
  }

}
