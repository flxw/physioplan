import { Injectable } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from './exercises-mock';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exercises = EXERCISES;
  exerciseMapById: Map<number, Exercise>;

  constructor() {
    this.exerciseMapById = new Map(this.exercises.map( (e) => [e.id, e]));
  }

  getExercises(): Exercise[] {
    return this.exercises;
  }

  getExerciseById(id): Exercise {
    return this.exerciseMapById.get(id);
  }
}
