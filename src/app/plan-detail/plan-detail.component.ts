import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.styl']
})

export class PlanDetailComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

}
