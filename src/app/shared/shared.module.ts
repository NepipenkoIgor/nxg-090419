import { NgModule, Type } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { ValidatorService } from '@shared/services/validator.service';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { UniqUserValidatorDirective } from './directives/uniq-user-validator.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from '../interceptor.service';
import { BASE_URL_TOKEN, baseUrl } from '../config';
import { FlexLayoutModule } from '@angular/flex-layout';

export const modules: Type<any>[] = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule,
  FormsModule,
  HttpClientModule,
  FlexLayoutModule,
  ReactiveFormsModule
];

@NgModule({
  imports: modules,
  exports: [...modules, UsernameValidatorDirective, EqualValidatorDirective, UniqUserValidatorDirective],
  declarations: [UsernameValidatorDirective, EqualValidatorDirective, UniqUserValidatorDirective],
  providers: [
    ValidatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {provide: BASE_URL_TOKEN, useValue: baseUrl},
  ]
})
export class SharedModule {
}
