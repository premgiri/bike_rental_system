import { NgModule } from '@angular/core';

import { SharedLibsModule } from './shared-libs.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SharedLibsModule, CommonModule],
  declarations: [
  ],
  exports: [
    SharedLibsModule
  ],
})
export class SharedModule {}
