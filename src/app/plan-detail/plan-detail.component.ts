import { ExerciseService } from './../services/exercise.service';
import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.styl']
})

export class PlanDetailComponent implements OnInit {
  private sub: any;
  private id = 0;
  public exercise: Exercise;

  constructor(private route: ActivatedRoute,
              private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.exercise = this.exerciseService.getExerciseById(this.id);
   });
  }
}
