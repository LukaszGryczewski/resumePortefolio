import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  featureProject = {} as Project;

  constructor(private titleService : Title, private projectsService : ProjectsService){
    this.titleService.setTitle("Lukasz Gryczewski - Home");
  }

  ngOnInit(): void {
    this.featureProject = this.projectsService.GetProjectById(0);
  }
}
