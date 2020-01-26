import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-plan-master',
  templateUrl: './plan-master.component.html',
  styleUrls: ['./plan-master.component.styl']
})

export class PlanMasterComponent implements OnInit {
  private sub: any;
  private selectedId: number = undefined;
  private exercises = [];

  constructor(private route: ActivatedRoute,
              private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let area = params['area'];
      this.exercises = this.exerciseService.getExercisesByCategory(area);
   });
  }

  setSelectedExercise(id: number): void {
    this.selectedId = id;
  }
}
