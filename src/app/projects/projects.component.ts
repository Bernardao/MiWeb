import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
  providers: [ProjectService],
  animations: [
    /*trigger('visibility', [
        state('in', style({
            height: '*',
            opacity: 1
        })),
        state('out', style({
            height: '0px',
            opacity: 0
        })),
        transition('void => *', [animate(500, style({height: '0px', opacity: 0}))]),
        transition('* => void', [animate(500, style({height: '*', opacity: 1}))])
    ]),*/
    /*trigger('flyInOut', [
      state('in', style({transform: 'translateX(0) scale(1)'})),
      state('out',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out')),
      transition('void => out', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('out => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => in', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('in => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ]),*/
    trigger('animation', [
      transition('void => *', [
        style({transform: 'scale(0)', opacity:0}),
        animate(500, style({transform: 'scale(1)', opacity:1})) 
      ]),
      transition('* => void', [
        animate(500, style({transform: 'scale(0)', opacity:0})) 
      ])
    ])
  ]
})

export class ProjectsComponent implements OnInit {

  projectsAngular2: Project[];

  projectsUnity: Project[];

  constructor(
    private router: Router,
    private projectService: ProjectService) { }
  
  getProjectsAngular2(): void {
    this.projectService.getProjectsForTheme('Angular2').then(projectsAngular2 => this.projectsAngular2 = projectsAngular2);
  }

  getProjectsUnity(): void {
    this.projectService.getProjectsForTheme('Unity').then(projectsUnity => this.projectsUnity = projectsUnity);
  }

  ngOnInit(): void {
    this.getProjectsAngular2();
    this.getProjectsUnity();
  }

  deleteAngular2(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projectsAngular2 = this.projectsAngular2.filter(h => h !== project);
      });
  }

  deleteUnity(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projectsUnity = this.projectsUnity.filter(h => h !== project);
      });
  }
}