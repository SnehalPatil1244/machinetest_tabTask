import { Component, OnInit } from '@angular/core';
import { Iskill } from 'src/app/models/ngfor';
import { Iskill2 } from 'src/app/models/ngforswitch';

@Component({
  selector: 'app-ngforswitch',
  templateUrl: './ngforswitch.component.html',
  styleUrls: ['./ngforswitch.component.scss']
})
export class NgforswitchComponent implements OnInit {
selectedskill : string = 'html'
  constructor() { }

  ngOnInit(): void {
  }

  Language : Array<Iskill2> = [
    {
      id: 'html',
      name: 'HTML',
      dif: 'HTML is the foundation of all web pages, used to define structure and layout.'
    },
    {
      id: 'css',
      name: 'CSS',
      dif: 'CSS controls the appearance and layout of webpages and helps in responsive design.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      dif: 'JavaScript enables interactive and dynamic web applications.'
    },
    {
      id: 'angular',
      name: 'Angular',
      dif: 'Angular is a TypeScript-based framework for building scalable web applications.'
    }
  ];

  onchange(skill : string){
    this.selectedskill = skill
  }


}
