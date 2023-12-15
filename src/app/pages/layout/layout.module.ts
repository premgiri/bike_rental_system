import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';

// import { LayoutComponent } from './layout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from 'src/app/icons-provider.module';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
// import { NzCollapseModule } from 'ng-zorro-antd/collapse';


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    LayoutRoutingModule
  ],
  declarations: [],
  exports: []
})
export class LayoutModule { }
