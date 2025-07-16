import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule, HeaderModule, IconModule, ItemModule, PageModule, DividerComponent, AvatarComponent } from '@kirbydesign/designsystem';
import { Experience } from './experience/experience';
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  imports: [
    PageModule,
    ItemModule,
    IconModule,
    HeaderModule,
    CardModule,
    DividerComponent,
    AvatarComponent,
    ExperienceComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
public readonly experiences: Experience[] = [
    {
      startTime: 'Jan 2022',
      endTime: 'Present',
      companyName: 'Acme Corp',
      title: 'Senior Developer',
      description: 'Working on scalable web applications.',
      bullets: ['Led migration to Angular 15.'],
      skills: ['Angular', 'TypeScript', 'Kirby Design System']
    },
    {
      startTime: 'Jan 2020',
      endTime: 'Dec 2021',
      companyName: 'Tech Solutions',
      title: 'Frontend Engineer',
      description: 'Developed user interfaces for various projects.',
      bullets: ['Implemented responsive designs.', 'Optimized performance.'],
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      startTime: 'Jan 2018',
      endTime: 'Dec 2019',
      companyName: 'Web Innovations',
      title: 'Junior Developer',
      description: 'Assisted in building web applications.',
      bullets: ['Collaborated with designers.', 'Fixed bugs and issues.'],
      skills: ['AngularJS', 'jQuery', 'Bootstrap']
    }
  ];
}
