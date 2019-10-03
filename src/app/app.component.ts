import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Physioplan v0.2';
  exercises = [];

  selectedExercise: Exercise =null;

  constructor(private exerciseService:ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
  }

  onSelect(e: Exercise): void {
    this.selectedExercise = e;
  }
}
