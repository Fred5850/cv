import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule, CheckboxComponent, HeaderModule, IconModule, ItemModule, KirbyModule, PageModule, DividerComponent, AvatarComponent } from '@kirbydesign/designsystem';

@Component({
  imports: [
    PageModule,
    ItemModule,
    IconModule,
    CheckboxComponent,
    HeaderModule,
    CardModule,
    DividerComponent,
    AvatarComponent
],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

}
