import { Injectable } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from './exercises-mock';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exercises = EXERCISES;

  getExercises(): Exercise[] {
    return this.exercises;
  }
}
