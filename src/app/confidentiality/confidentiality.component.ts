import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confidentiality',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './confidentiality.component.html',
  styleUrl: './confidentiality.component.scss'
})

export class ConfidentialityComponent {
  constructor(private titleService:Title){
    this.titleService.setTitle("Lukasz Gryczewski - Confidentiality");
  }
}
