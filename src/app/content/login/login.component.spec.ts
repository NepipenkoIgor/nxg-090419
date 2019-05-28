import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Login Component', () => {

  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, FormsModule, RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [provideMockStore({initialState: {}})]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('test form ', () => {
    const nameField: DebugElement = fixture.debugElement.query(By.css('input[name="username"]'));
    nameField.triggerEventHandler('input', {target: {value: 'inep!!'}});
    const passwordField: DebugElement = fixture.debugElement.query(By.css('input[name="password"]'));
    passwordField.triggerEventHandler('input', {target: {value: '123123'}});
    fixture.detectChanges();
    const submit: DebugElement = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submit.nativeElement.disabled).toBeTruthy();
  });
});
