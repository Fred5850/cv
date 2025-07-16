import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from './experience';
import { CardModule, ItemModule, DividerComponent } from "@kirbydesign/designsystem";
import { BadgeComponent } from "@kirbydesign/designsystem/badge";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, ItemModule, DividerComponent, BadgeComponent],
})
export class ExperienceComponent {
  @Input() experience!: Experience;
}