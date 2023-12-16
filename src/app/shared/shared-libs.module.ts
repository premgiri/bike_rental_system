import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HttpClientJsonpModule } from '@angular/common/http';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  imports: [],
  exports: [
    NzLayoutModule,
    NzStatisticModule,
    NgApexchartsModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    FormsModule,
    NzDatePickerModule,
    NzTabsModule,
    NzTagModule,
    NzProgressModule,
    NzAlertModule,
    NzResultModule,
    NzSpinModule,
    NzMessageModule,
    NzFormModule,
    NzPopconfirmModule,
    NzDescriptionsModule,
    NzDrawerModule,
    NzToolTipModule,
    NzEmptyModule,
    NzPopoverModule,
    NzModalModule,
    NzStepsModule,
    NzAvatarModule,
    NzSelectModule,
    NzCardModule,
    CommonModule,
    NzUploadModule,
    NzInputModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzGridModule,
    ReactiveFormsModule,
    NzTypographyModule,
    NzPaginationModule,
    NzCheckboxModule,
  ],
  providers: [NzMessageService, NzModalService],
})
export class SharedLibsModule {}
