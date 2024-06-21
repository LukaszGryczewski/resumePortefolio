import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'resume', component:ResumeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contact', component:ContactComponent},
  {path:'confidentiality', component:ConfidentialityComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'},

];
