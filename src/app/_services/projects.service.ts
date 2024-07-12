import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects : Project[] = [
    {id:0, name:'Laravel Project GeekTresure', summary:'Ecommerce website realised for Final thesis', description:`At the end of my bachelor's degree in management IT, the finalization of the course requires the presentation of an End of Study Work, designated under the name “Proof Integrated". This crucial step is intended to reflect the skills and knowledge patiently acquired over three years of rigorous learning. The Integrated Test is not simply a validation of acquired knowledge, but a tangible demonstration that the student was able to apply the know-how and theoretical knowledge taught during the curriculum. Each student, depending on their affinities and their vision, is called upon to design a application that embodies these skills. In this perspective, my passion and my interest for the retail sector led me to the creation of a site dedicated to the sale of games collection. More than a simple e-commerce site, it is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs.`, projectLink:'https://github.com/LukaszGryczewski/echanges', tags:[Tag.LARAVEL,Tag.PHP,Tag.JAVASCRIPT,Tag.BOOTSTRAP,Tag.JQUERY,Tag.AJAX,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/geektresure1.png","../../assets/pictures/geektresure2.png","../../assets/pictures/geektresure3.png","../../assets/pictures/geektresure4.png","../../assets/pictures/geektresure5.png","../../assets/pictures/geektresure6.png","../../assets/pictures/geektresure7.png","../../assets/pictures/geektresure8.png"]},
    {id:1, name:'Angular Project Portfolio', summary:'A portfolie of my practical work', description:'My portfolio includes all the work I did during my bachelors degree as well as personal work, exercise and tutorial', projectLink:'https://github.com/LukaszGryczewski/resumePortefolio', tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/default-image.jpg"]},
    {id:3, name:'String Project ', summary:'A tutorial project for learn Angular', description:'A tutorial project realiserd for learn and training Angular framework', projectLink:'', tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/default-image.jpg"]},
    {id:4, name:'Angular Project Snapface', summary:'A tutorial project for learn Angular', description:`Snapface is a modern and interactive web application designed to provide a pleasant experience for viewing and interacting with photos. Developed with Angular framework version 17.3.0 and using TypeScript 5.4.2, Snapface combines performance, responsiveness, and a smooth user interface to allow users to easily navigate through photo collections and "like" them.`, projectLink:'', tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/snapface1.png","../../assets/pictures/snapface2.png","../../assets/pictures/snapface3.png","../../assets/pictures/snapface4.png","../../assets/pictures/snapface5.png","../../assets/pictures/snapface6.png","../../assets/pictures/snapface7.png",]},
    {id:5, name:'Laravel Project Reservation ', summary:'Website for reservation, buy teather, movie Theater ticket', description:'Reservation site, purchase of theater tickets, cinema tickets. Website created during my bachelors degree in management IT for the Integration Project course development.', projectLink:'https://github.com/LukaszGryczewski/reservations', tags:[Tag.LARAVEL,Tag.BOOTSTRAP,Tag.PHP,Tag.JAVASCRIPT,Tag.JQUERY,Tag.HTML,Tag.CSS], pictures:["../../assets/pictures/reservation1.png","../../assets/pictures/reservation2.png","../../assets/pictures/reservation3.png","../../assets/pictures/reservation4.png","../../assets/pictures/reservation5.png","../../assets/pictures/reservation6.png","../../assets/pictures/reservation7.png","../../assets/pictures/reservation8.png","../../assets/pictures/reservation9.png","../../assets/pictures/reservation10.png","../../assets/pictures/reservation11.png","../../assets/pictures/reservation12.png","../../assets/pictures/reservation13.png",]},
    {id:6, name:'Architecture software Report GeekTresure', summary:'It is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs. ', description:`At the end of my bachelor's degree in management IT, the finalization of the course requires the presentation of an End of Study Work, designated under the name “Proof Integrated". This crucial step is intended to reflect the skills and knowledge patiently acquired over three years of rigorous learning. The Integrated Test is not simply a validation of acquired knowledge, but a tangible demonstration that the student was able to apply the know-how and theoretical knowledge taught during the curriculum. Each student, depending on their affinities and their vision, is called upon to design a application that embodies these skills. In this perspective, my passion and my interest for the retail sector led me to the creation of a site dedicated to the sale of games collection. More than a simple e-commerce site, it is a platform highlighting unique and rare pieces, targeting both professionals and enlightened amateurs. This report, much more than a technical documentation, is the story of the journey undertaken to complete this Integrated Test. It retraces the different stages of design, development and implementation of this ambitious project. By browsing it, you discover the challenges encountered, the solutions provided and, above all, the concrete application of the skills acquired during my training. Contents
    Thanks ................................................. ..................................3
    1. Glossary .............................................. .......................................4-8
    2. Introduction .............................................. .......................................9
    3. Synopsis .............................................. .........................................9
    4. Specifications ......................................... .............................10-24
    4.1. Presentation of the company ............................................. ..........10
    4.1.1. Goals ................................................ .............11
    4.1.2. The targets ................................................ .............11-12
    4.1.3. Project scope ............................................... .....12
    4.2. The competitors ................................................ .................13-15
    4.3. Ergonomics and graphics .......................................... .......16-21
    4.3.1. Structure of the e-commerce site ..........................................16-18
    4.3.2. Characteristics of product sheets .........................18-19
    4.3.3. The graphic chart ............................................... .20-21
    4.4. Specifics and deliverables ............................................. ...22-24
    4.4.1. The content of your site .........................................22-23
    4.4.2. Technical constraints .........................................23
    4.4.3. Deliverables ................................................ .............24
    4.5. Functional specifications.............................................. .....25-36
    5. Task organization chart ......................................... .........................37
    6. Detailed forecast planning - Gantt chart ................................38-39
    7. Analysis .............................................. .......................................40-43
    Use case diagram for the GeekTreasures site ..................................40
    Activity diagram .......................................... .......................41
    Navigation diagram .............................................. .................42
    Sequence diagram: Payment ............................................. .......42
    Transition state diagram ......................................... ..............43
    Class diagram............................................... .........................44
    8. Safety........................................................ .......................................45-46
    9. Legal Compliance and Legal Framework ........................................... ...........46-47
    10. Navigable prototype............................................ .........................48-53
    11. Database schema........................................................ .........................54
    12. Deploying GeekTreasures on InfinityFree .........................................55-59
    13. GeekTreasures Site Manual ............................................. .............59-63
    14. Rest API .......................................... .........................................63-67
    15. Erratum .............................................. .......................................67-123
    16. Conclusion .............................................. .......................................124
    17. Anti-plagia certificate ............................................. .........................125
    18. Bibliography................................................ .................................126-128
    19. Appendices .............................................. ...................................129-130`, projectLink:'', tags:[], pictures:["../../assets/pictures/default-image.jpg"]},

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
