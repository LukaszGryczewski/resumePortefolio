import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  projects: Project[] = [];
  currentProjectIndex: number = 0;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle("Lukasz Gryczewski - Home");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetAllProjects();
  }

  navigateNext(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  navigatePrev(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }
}
