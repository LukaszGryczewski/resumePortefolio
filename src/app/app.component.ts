import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            HeaderComponent,
            NavigationBarComponent,
            HomeComponent,
            ResumeComponent,
            PortfolioComponent,
            ContactComponent,
            FooterComponent,
            ConfidentialityComponent,
            RouterOutlet,
            RouterLink,
            NgbModalModule,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resumePortfolio';
}
