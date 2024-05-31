import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule,
            CommonModule,],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  project = {} as Project;
  constructor(public bsModalRef : BsModalRef){

  }
}
