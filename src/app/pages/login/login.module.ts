import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    LoginRoutingModule,
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class LoginModule { }
