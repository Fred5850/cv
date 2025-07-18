import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule, HeaderModule, IconModule, ItemModule, PageModule, DividerComponent, AvatarComponent } from '@kirbydesign/designsystem';
import { Experience } from './experience/experience';
import { ExperienceComponent } from "./experience/experience.component";
import { BadgeComponent } from "@kirbydesign/designsystem/badge";

@Component({
  imports: [
    PageModule,
    ItemModule,
    IconModule,
    HeaderModule,
    CardModule,
    DividerComponent,
    AvatarComponent,
    ExperienceComponent,
    BadgeComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
public readonly experiences: Experience[] = [
    {
      startTime: 'Apr 2024',
      endTime: 'Present',
      companyName: 'Company E',
      title: 'Software Developer - Full-time',
      description: 'As part of a close-knit agile team, I contributed to the design, development, and maintenance of business-critical integrations in the Finance & Risk domain. My responsibilities included building and documenting frontend and backend components, designing and maintaining APIs and automation scripts, and ensuring robust, reliable solutions from idea to production.',
      bullets: ['Developing Angular applications for external and internal use', 'Building and maintaining backend APIs in Java', 'Working with SQL databases and 3rd party APIs'],
      skills: ['Java', 'Angular', 'Spring Boot', 'SQL','API', '3rd Party API']
    },
    {
      startTime: 'Oct 2023',
      endTime: 'Mar 2024',
      companyName: 'Company D',
      title: 'Software Developer - Full-time',
      description: 'Try&Hire at Company E',
      bullets: ['Developing Angular applications for external and internal use', 'Building and maintaining backend APIs in Java', 'Working with SQL databases and 3rd party APIs'],
      skills: ['Java', 'Angular', 'Spring Boot', 'SQL','API', '3rd Party API']
    },
    {
      startTime: 'Jun 2022',
      endTime: 'Aug 2023',
      companyName: 'Company C',
      title: 'Software Engineer - Full-time',
      description: 'Help develop a digital tool for wastewater planning & an optimal real-time control of your wastewater treatment plant in a cross-functional team',
      bullets: ['Built and maintained frontend in Vue and backend APIs in C#', 'Applied Domain Driven Design (DDD) principles', 'Integrated MS SQL and GeoServer for data management', 'Integrating 3rd party APIs'],
      skills: ['Vue', 'TypeScript', 'C#', 'Azure', 'SQL', 'IaC', 'GeoServer', 'API', 'Scrum', 'Pulumi', 'DDD', '3rd Party API']
    },
    {
      startTime: 'Mar 2021',
      endTime: 'May 2022',
      companyName: 'Company B',
      title: 'Junior Developer - Full-time',
      description: 'Delivered APIs, Salesforce journeys, Angular & WinForm tools, and B2C integrations',
      bullets: ['Lead API in Azure function', 'Salesforce Journey Builder', 'Internal Angular tooling e.g Power BI generation on catalogs', 'SFTP Flows for data exchange', 'Handling B2C Flow from NAV to InRiver PIM'],
      skills: ['C#','API', 'Angular', 'SQL', 'Azure', 'SOQL', 'Salesforce', 'Power BI', 'PIM']
    },
    {
      startTime: 'Aug 2020',
      endTime: 'Oct 2020',
      companyName: 'Company A',
      title: 'Software Developer - Internship',
      description: 'Agile intern doing POC\'s for feature development and tests',
      bullets: ['Voice-to-text POC from Azure & Google', 'Developed unit & Selenium tests for existing codebase'],
      skills: ['Java', 'Selenium', 'Azure', 'Google cloud', 'Scrum']
    }
  ];

  public get allSkills(): string[] {
    const all = this.experiences.flatMap(e => e.skills);
    return Array.from(new Set(all)).sort();
  }
}
