import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from './experience';
import { CardModule, ItemModule, DividerComponent } from "@kirbydesign/designsystem";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, ItemModule, DividerComponent],
})
export class ExperienceComponent {
  @Input() experience!: Experience;
}