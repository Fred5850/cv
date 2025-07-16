import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  CardModule, CheckboxComponent, HeaderModule, IconModule, ItemModule, KirbyModule, PageModule } from '@kirbydesign/designsystem';

@Component({
  imports: [     
    PageModule,
    ItemModule,
    IconModule,
    CheckboxComponent,
    HeaderModule,
    CardModule
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

}
