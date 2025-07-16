import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutletModule } from "@kirbydesign/designsystem/router-outlet";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ RouterOutletModule],
  template: '<kirby-router-outlet/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
