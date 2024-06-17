import { CommonModule } from '@angular/common';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgbAccordionModule,CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  providers:[NgbAccordionConfig],
})

export class ResumeComponent {
  languages: { name: string, level: number }[] = [];
  skills: { name: string, level: number }[] = [];
  technologies: { name: string}[] = [];

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private config: NgbAccordionConfig,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle("Lukasz Gryczewski - Resume");
  }

  DowloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/documents/Resume-En.pdf');
    link.setAttribute('download', 'Resume-En.pdf');
    link.click();
    link.remove();
  }

  ngOnInit(): void {
    this.languages = this.projectsService.languages;
    this.skills = this.projectsService.skills;
    this.technologies = this.projectsService.technologies;
  }
}
