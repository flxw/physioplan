import {Cadence} from './cadence';

export class Exercise {
  id: number;
  etype: string;
  name: string;
  sets: number;
  break: number;
  video: string;
  description: string;
  categories: string[];

  // for cadenced type of exercise
  reps?: number;
  per_side?: boolean;
  cadence?: Cadence;

  // for hold type of exercise
  hold?: number;
};
