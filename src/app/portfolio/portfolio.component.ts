import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  project : Project = {
    id      : 0,
    name    : 'Angular Project Snapface',
    summary : 'A tutorial project for learn Angular',
    description : 'A tutorial project realiserd for learn and training Angular framework',
    projectLink : '',
    tags : [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS],
    pictures : [],
  };

  constructor(private titleService:Title){
    this.titleService.setTitle("Lukasz Gryczewski - Portefolio");
  }
}
