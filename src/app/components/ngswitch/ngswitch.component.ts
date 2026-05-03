import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
selectedskill : string =' html'
  constructor() { }

  ngOnInit(): void {
  }

  onchange(skill : string){
    this.selectedskill = skill
  }

}
