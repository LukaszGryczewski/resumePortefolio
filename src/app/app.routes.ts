import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'resume', component:ResumeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contact', component:ContactComponent},
  {path:'confidentiality', component:ConfidentialityComponent},
  {path:'about', component:AboutComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'},

];
