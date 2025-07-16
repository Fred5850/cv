import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule, CheckboxComponent, HeaderModule, IconModule, ItemModule, KirbyModule, PageModule, DividerComponent, AvatarComponent } from '@kirbydesign/designsystem';
import { Experience } from './experience/experience';
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  imports: [
    PageModule,
    ItemModule,
    IconModule,
    CheckboxComponent,
    HeaderModule,
    CardModule,
    DividerComponent,
    AvatarComponent,
    ExperienceComponent
],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
public readonly experiences: Experience[] = [
    {
      StartTime: 'Jan 2022',
      EndTime: 'Present',
      CompanyName: 'Acme Corp',
      Title: 'Senior Developer',
      Description: 'Working on scalable web applications.',
      bullets: ['Led migration to Angular 15.'],
      Skills: ['Angular', 'TypeScript', 'Kirby Design System']
    },
  ];
}
