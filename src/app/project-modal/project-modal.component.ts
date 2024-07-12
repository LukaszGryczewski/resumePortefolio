import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, ViewChild } from '@angular/core';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  project = {} as Project;

  @ViewChild('carousel', { static: false }) carousel!: CarouselComponent;

  constructor(public bsModalRef: BsModalRef) {}

  previousSlide(): void {
    this.carousel?.previousSlide();
  }

  nextSlide(): void {
    this.carousel?.nextSlide();
  }
}
