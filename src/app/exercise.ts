import {Cadence} from './cadence';

export class Exercise {
  etype: string;
  name: string;
  sets: number;
  break: number;
  video: string;
  description: string

  // for cadenced type of exercise
  reps?: number;
  per_side?: boolean;
  cadence?: Cadence;

  // for hold type of exercise
  hold?: number;
};
