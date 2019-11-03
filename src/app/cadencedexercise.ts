import { Exercise } from './exercise';
import { Cadence } from './cadence';


export class CadencedExercise extends Exercise {
  reps: number;
  per_side: boolean;
  cadence: Cadence;
};
