import { ApplicationRef, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootStore } from '../../store/reducers';
import { LoginPending } from '../../store/actions/auth.actions';

@Component({
  selector: 'course-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public constructor(
    private store: Store<IRootStore>,
    private  a: ApplicationRef,
    private  zone: NgZone,
    private  cd: ChangeDetectorRef,
  ) {
    // vk.getUser((user)=>{
    //   console.log(user)
    //   this.zone.runOutsideAngular(()=>{
    //
    //   })
    //   this.zone.run(()=>{
    //     this.user= user;
    //   })
    // })
  this.cd.detectChanges();
  }

  public login(loginInfo: { username: string, password: string }): void {
    this.store.dispatch(new LoginPending(loginInfo));
  }

}
