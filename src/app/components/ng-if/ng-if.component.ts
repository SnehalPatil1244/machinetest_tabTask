import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  selectedskills : string = 'html'

  constructor() { }

  ngOnInit(): void {
  }

  ontabchange(skill : string){
    this.selectedskills = skill
  }

}
