import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Physioplan v0.2';
  exercises = [];
  selectedId = 0

  constructor(private exerciseService: ExerciseService,
              private router: Router) {
                this.router = router;
  }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
  }

  showExerciseDetails(id): void {
    this.selectedId = id;
    this.router.navigate(["/exercise", id]);
  }
}
