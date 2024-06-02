import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Tag } from '../_models/Tag';
//import { CollapseModule } from '@ngx-bootstrap/collapse';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,
            CommonModule,
            FormsModule,
          ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    trigger('expandCollapse', [
                state('open', style({height: '100%', opacity: 1})),
                state('closed', style({height: 0, opacity: 0})),
                transition('* => *', [animate('100ms')])
            ]),
 ]
})
export class PortfolioComponent implements OnInit{




  //projects = {} as Project[];

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  availableTags: { tag: Tag; selected: boolean }[] = [
    { tag: Tag.ANGULAR, selected: false },
    { tag: Tag.PHP, selected: false },
    { tag: Tag.JAVA, selected: false },
    { tag: Tag.JAVASCRIPT, selected: false },
    { tag: Tag.CSS, selected: false },
    { tag: Tag.HTML, selected: false },
    { tag: Tag.LARAVEL, selected: false },
    { tag: Tag.SPRING, selected: false },
    { tag: Tag.TYPESCRIPT, selected: false },
    { tag: Tag.JQUERY, selected: false },
    { tag: Tag.AJAX, selected: false },
    { tag: Tag.BOOTSTRAP, selected: false },
  ];

  isCollapsed: boolean = true;

  showTags: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Lukasz Gryczewski - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetAllProjects();
    this.filteredProjects = this.projects;
  }

  toggleTags() {
    this.showTags = !this.showTags;
  }

  filterProjects(): void {
    const selectedTags = this.availableTags.filter(tag => tag.selected).map(tag => tag.tag);
    if (selectedTags.length > 0) {
      this.filteredProjects = this.projects.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      );
    } else {
      this.filteredProjects = this.projects;
    }
  }
}
