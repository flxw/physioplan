import { Exercise } from '../exercise';
import { HoldExercise } from '../holdexercise';
import { CadencedExercise } from '../cadencedexercise';

export const EXERCISES:Exercise[] = [{
  etype: 'cadenced',
  name: 'Paddeln',
  sets: 3,
  per_side: false,
  reps: 20,
  cadence: {
    excentric: 1,
    postexcentrichold: 0,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 60,
  video: 'paddeln.mp4',
  description: 'Ausgangsposition in Bauchlage; Oberkörper hebt leicht von Matte ab; Arme sind gerade über den Kopf ausgestreckt; Doppelkinn; Arme nach oben abheben; diagonale Bewegung der Arme'
},{
  etype: 'cadenced',
  name: 'Außenrotation 90°',
  sets: 3,
  per_side: false,
  reps: 15,
  cadence: {
    excentric: 2,
    postexcentrichold: 0,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 45,
  video: 'aussenrotation_schulter_720p.mp4',
  description: 'hüftbreiter Stand; Ellenbogen im 90° Winkel und eng am Körper; Schulterblatt tief und nach hinten; Rotation erfolgt über das Schultergelenk'
},{
  etype: 'hold',
  name: 'Banded distraction Pectoralis',
  sets: 2,
  hold: 60,
  break: 45,
  video: 'banded_distraction_pectoralis_720p.mp4',
  description: 'hüftbreiter Stand; Band ist seitlich neben dem Körper; Handfläche nach oben rotiert; Schulterblatt tief und nach hinten; Rotation des Oberkörpers; Arm bleibt gestreckt'
}];

/*,{
  name: 'Dehnung Pectoralis',
  sets: 3,
  duration: 30,
  break: 30,
  video: 'Wall stretch Pectoralis',
  description: 'hüftbreiter Stand seitlich zur Wand, Ellenbogen im 90° Winkel, Ellenbogen auf Höhe der Schulter bringen, Handfläche zur Wand drehen, Druck mit Handfläche an Wand, Rotation des Oberkörpers zur Gegenseite der Wand'
},{
  name: 'Straight Ball Pressure',
  sets: 3,
  reps: 10,
  cadence: '1-2-1-0',
  break: 45,
  video: 'Druck mit ausgestrecktem Arm in Ball',
  description: 'hüftbreiter Stand, Arm ausgestreckt und parallel zum Boden, Hand ist in der MItte des Balls, Druck in den Ball ausüben und halten, Position des Arms verändert sich nicht, Bewegung kommt nur aus dem Schultergelenk'
},{
  name: 'Laterally Ball Pressure',
  sets: 3,
  reps: '10',
  cadence: '1-2-1-0'
  break: 45,
  video: 'Druck mit Arm im 90° WInkel  in Ball',
  description: 'hüftbreiter Stand, Arm seitlich vom Körper abgespreizt, Ellenbogen im 90° WInkel und auf Höhe der Schulter, Druck mit Ellenbogen in den Ball ausüben und halten, Position des Arms verändert sich nicht, Bewegung kommt nur aus dem Schultergelenk'
},{
  name: 'Advanced Swimmer',
  sets: 3,
  reps: 4,
  cadence: '1-0-1-0',
  break: 45,
  video: 'Schwimmer mit Gewicht',
  Description: 'Ausgangsposition in Bauchlage, Oberkörper hebt leicht von Matte ab, Arme sind gerade über den Kopf ausgestreckt, Doppelkinn, Arme nach oben anheben, Gewicht vor dem Kopf von einer in die andere Hand übergeben, Arme in W Position zurückziehen, Gewicht auf Rücken übergeben'
},{
  name: 'Laterally Hips',
  sets: 3,
  reps: 10,
  break: 45,
  video: 'seitliche Hüftneigung',
  description: 'Rückenlage, Füße auf dem Boden aufgestellt und beine angewinkelt, Becken hat Kontakt zum Boden, Knie langsam zur Seite fallen lassen, Becken hält Kontakt zum Boden '
},{
  name: 'Move your Hips',
  sets: 3,
  reps: 10
  break: 45,
  video: 'Hip movement',
  description: 'Rückenlage, Beine ausgestreckt und zusammen, Becken hat Kontakt zum Boden, rechtes bein nach unten drücken und linkes nach oben ziehen, Beine bleiben gestreckt, Becken hält Kontakt zum Boden, Wechsel '
},{
  name: 'Hip Opener with Twist',
  sets: 3,
  reps:  8,
  break: 45,
  video: 'Ausfallschritt mit Ball ',
  description: 'Ausfallschritt, Ball in beiden Händen halten, Hüfte geht tief, Bauch und Po sind fest angespannt, Arme nehmen Ball gleichzeitig über den Kopf, Knie berührt Boden an unterster Stelle nicht, Ball ist in unterster Position mit ausgestreckten Armen über dem Kopf, Rotation des Oberkörpers zur nicht aufgestellten Seite, aus Ausfallschritt wieder gerade nach oben kommen, Arme gehen gleichzeitig nach unten'
},{
  name: 'banded Piriformis',
  sets: 3,
  duration: 30,
  break: 45,
  video: 'banded piriformis',
  description: 'Rückenlage, Füße auf dem Boden aufgestellt und beine angewinkelt, Becken hat Kontakt zum Boden, Gummi oberhalb des rechten Knies befestigen, rechten Fuß über linkes Knie legen, Hände um linken Oberschenkel legen,rechtes Bein rotiert nach außen'
},{
  name: 'Single leg glute bridges',
  sets: 3,
  reps: 10,
  cadence: '1-0-1-2'
  break: 45,
  video: 'single leg glute bridges',
  description: 'Rückenlage, Füße auf dem Boden aufgestellt und beine angewinkelt, rechtes Knie zur Brust anziehen, Druck über anderes Bein ausüben und Becken nach oben schieben, Spannung halten'
}*/
