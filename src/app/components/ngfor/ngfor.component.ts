import { Component, OnInit } from '@angular/core';
import { Iskill } from 'src/app/models/ngfor';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
selectedskill : string =  'node'
  constructor() { }

  ngOnInit(): void {
  }

    skill : Array<Iskill> =  [
    {
      tabTitle: 'Angular 14',
      frameWorkName: "angular 14",
      TabContent: " <strong> Angular </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam blanditiis  suscipit in quod consequuntur pariatur illum neque odit dolore!"
    },
    {
      tabTitle: 'Node',
      frameWorkName: "node",
      TabContent: " <strong> Node </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam blanditiis  suscipit in quod consequuntur pariatur illum neque odit dolore!"
    },
    {
      tabTitle: 'MongoDB',
      frameWorkName: "mongodb",
      TabContent: " <strong> MongoDB </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam blanditiis  suscipit in quod consequuntur pariatur illum neque odit dolore!"
    },
    {
      tabTitle: 'Express',
      frameWorkName: "express",
      TabContent: " <strong> Express </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam blanditiis  suscipit in quod consequuntur pariatur illum neque odit dolore!"
    }


  ]

  onchange(skill : string){
    this.selectedskill = skill
  }

}
