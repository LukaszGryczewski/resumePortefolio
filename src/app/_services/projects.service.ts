import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects : Project[] = [
    {id:0, name:'Laravel Project GeekTresure', summary:'Ecommerce website realised for Final thesis', description:`At the end of my bachelor's degree in management IT, the finalization of the course requires the presentation of an End of Study Work, designated under the name “Proof Integrated". This crucial step is intended to reflect the skills and knowledge patiently acquired over three years of rigorous learning. The Integrated Test is not simply a validation of acquired knowledge, but a tangible demonstration that the student was able to apply the know-how and theoretical knowledge taught during the curriculum. Each student, depending on their affinities and their vision, is called upon to design a application that embodies these skills. In this perspective, my passion and my interest for the retail sector led me to the creation of a site dedicated to the sale of games collection. More than a simple e-commerce site, it is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs.`, projectLink:'https://github.com/LukaszGryczewski/echanges', tags:[Tag.LARAVEL,Tag.PHP,Tag.JAVASCRIPT,Tag.BOOTSTRAP,Tag.JQUERY,Tag.AJAX,Tag.HTML,Tag.CSS,Tag.APIREST], pictures:["../../assets/pictures/geektresure1.png","../../assets/pictures/geektresure2.png","../../assets/pictures/geektresure3.png","../../assets/pictures/geektresure4.png","../../assets/pictures/geektresure5.png","../../assets/pictures/geektresure6.png","../../assets/pictures/geektresure7.png","../../assets/pictures/geektresure8.png"]},
    {id:1, name:'Angular Project Portfolio', summary:'My portfolio includes all the work I did during my bachelors degree and personal work', description:'This site is a comprehensive representation of my CV and portfolio, detailing my academic and professional journey, skills, languages spoken, technologies and programs I am proficient in, as well as showcasing all the projects I have completed. Includes sections : Detailed CV and Portfolio, Portfolio Section, Contact Section, Privacy Policy, About Page', projectLink:'https://github.com/LukaszGryczewski/resumePortefolio', tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS,Tag.APIREST], pictures:["../../assets/pictures/portefolio1.png","../../assets/pictures/portefolio2.png","../../assets/pictures/portefolio3.png","../../assets/pictures/portefolio4.png","../../assets/pictures/portefolio5.png","../../assets/pictures/portefolio6.png","../../assets/pictures/portefolio7.png","../../assets/pictures/portefolio8.png","../../assets/pictures/portefolio9.png","../../assets/pictures/portefolio10.png","../../assets/pictures/portefolio11.png","../../assets/pictures/portefolio12.png","../../assets/pictures/portefolio13.png","../../assets/pictures/portefolio14.png"]},
    {id:3, name:'Angular Project Snapface', summary:'A tutorial project for learn Angular', description:`Snapface is a modern and interactive web application designed to provide a pleasant experience for viewing and interacting with photos. Developed with Angular framework version 17.3.0 and using TypeScript 5.4.2, Snapface combines performance, responsiveness, and a smooth user interface to allow users to easily navigate through photo collections and "like" them.`, projectLink:'https://github.com/LukaszGryczewski/snapface', tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/snapface1.png","../../assets/pictures/snapface2.png","../../assets/pictures/snapface3.png","../../assets/pictures/snapface4.png","../../assets/pictures/snapface5.png","../../assets/pictures/snapface6.png","../../assets/pictures/snapface7.png",]},
    {id:4, name:'Laravel Project Reservation ', summary:'Website for reservation, buy teather, movie Theater ticket', description:'Reservation site, purchase of theater tickets, cinema tickets. Website created during my bachelors degree in management IT for the Integration Project course development.', projectLink:'https://github.com/LukaszGryczewski/reservations', tags:[Tag.LARAVEL,Tag.BOOTSTRAP,Tag.PHP,Tag.JAVASCRIPT,Tag.JQUERY,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/reservation1.png","../../assets/pictures/reservation2.png","../../assets/pictures/reservation3.png","../../assets/pictures/reservation4.png","../../assets/pictures/reservation5.png","../../assets/pictures/reservation6.png","../../assets/pictures/reservation7.png","../../assets/pictures/reservation8.png","../../assets/pictures/reservation9.png","../../assets/pictures/reservation10.png","../../assets/pictures/reservation11.png","../../assets/pictures/reservation12.png","../../assets/pictures/reservation13.png",]},
    {id:5, name:'Architecture software Report GeekTresure', summary:'It is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs. ', description:`At the end of my bachelor's degree in management IT, the finalization of the course requires the presentation of an End of Study Work, designated under the name “Proof Integrated". This crucial step is intended to reflect the skills and knowledge patiently acquired over three years of rigorous learning. The Integrated Test is not simply a validation of acquired knowledge, but a tangible demonstration that the student was able to apply the know-how and theoretical knowledge taught during the curriculum. Each student, depending on their affinities and their vision, is called upon to design a application that embodies these skills. In this perspective, my passion and my interest for the retail sector led me to the creation of a site dedicated to the sale of games collection. More than a simple e-commerce site, it is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs. This report, much more than a technical documentation, is the story of the journey undertaken to complete this Integrated Test. It retraces the different stages of design, development and implementation of this ambitious project. By browsing it, you discover the challenges encountered, the solutions provided and, above all, the concrete application of the skills acquired during my training. Contents : Thanks, Glossary, Introduction, Synopsis, Specifications, Presentation of the company, Goals, The targets, Project scope, The competitors, Ergonomics and graphics, Structure of the e-commerce site, Characteristics of product sheets, The graphic chart, Specifics and deliverables, The content of your site, Technical constraints, Deliverables, Functional specifications, Task organization chart, Detailed forecast planning - Gantt chart, Analysis, Use case diagram for the GeekTreasures site, Activity diagram, Navigation diagram, Sequence diagram: Payment, Transition state diagram, Class diagram, Safety, Legal Compliance and Legal Framework, Navigable prototype, Database schema, Deploying GeekTreasures on InfinityFree, GeekTreasures Site Manual, Rest API, Erratum, Conclusion, Anti-plagia certificate, Bibliography, Appendices`, projectLink:'', tags:[], pictures:["../../assets/pictures/RapportGeekTresure1.png","../../assets/pictures/RapportGeekTresure2.png","../../assets/pictures/RapportGeekTresure3.png","../../assets/pictures/RapportGeekTresure4.png","../../assets/pictures/RapportGeekTresure5.png","../../assets/pictures/RapportGeekTresure6.png","../../assets/pictures/RapportGeekTresure7.png","../../assets/pictures/RapportGeekTresure8.png","../../assets/pictures/RapportGeekTresure9.png","../../assets/pictures/RapportGeekTresure10.png","../../assets/pictures/RapportGeekTresure11.png","../../assets/pictures/RapportGeekTresure12.png","../../assets/pictures/RapportGeekTresure13.png","../../assets/pictures/RapportGeekTresure14.png",]},
    {id:6, name:'Spring Project ', summary:'Under construction', description:'Under construction', projectLink:'', tags:[Tag.SPRING,Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/default-image.jpg"]},

  ];

  languages: { name: string, level: number }[] = [
    { name: 'French', level: 6 },
    { name: 'English', level: 4 },
    { name: 'Dutch', level: 3 },
    { name: 'Polish', level: 6 },
  ];

  skills: { name: string, level: number }[] = [
    { name: 'Software architecture', level: 5 },
    { name: 'Spring (Spring-Boot)', level: 3 },
    { name: 'Angular', level: 4 },
    { name: 'Java (Object-oriented)', level: 5 },
    { name: 'API REST', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'Node.js', level: 3 },
    { name: 'JSON', level: 4 },
    { name: 'Ajax', level: 4 },
    { name: 'Laravel', level: 5 },
    { name: 'CodeIgniter', level: 3 },
    { name: 'PHP (object-oriented)', level: 5 },
    { name: 'HTML / CSS', level: 5 },
    { name: 'SQL', level: 5 },
    { name: 'UML analysis and diagrams', level: 5 },
    { name: 'Git (with GitHub / Bitbucket)', level: 5 },
    { name: 'Cobol', level: 3 },
    { name: 'Pascal', level: 3 }
];

technologies: { name: string }[] = [
  { name: 'Apache' },
  { name: 'Maven' },
  { name: 'Tomcat' },
  { name: 'IntelliJ IDEA' },
  { name: 'Visual Studio Code' },
  { name: 'MySQL' },
  { name: 'MariaDB' },
  { name: 'Postman' },
  { name: 'Xdebug' },
  { name: 'XAML' },
  { name: 'XAMPP' },
  { name: 'UwAmp' },
  { name: 'Composer' },
  { name: 'Git: GitHub / Bitbucket' },
  { name: 'VM VirtualBox' }
];

  constructor() { }

  GetAllProjects(){
    return this.projects;
  }

  GetProjectById(id : number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project == undefined){
      throw new TypeError("The project undifined");
    }

    return project;
  }
}
