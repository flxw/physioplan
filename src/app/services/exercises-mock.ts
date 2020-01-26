  // tslint:disable: max-line-length
  // tslint:disable: whitespace


import { Exercise } from '../exercise';

export const EXERCISES:Exercise[] = [{
  id: 1,
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
  description: 'Ausgangsposition in Bauchlage; Oberkörper hebt leicht von Matte ab; Arme sind gerade über den Kopf ausgestreckt; Doppelkinn; Arme nach oben abheben; diagonale Bewegung der Arme',
  categories: ['shoulders']
},{
  id:2,
  etype: 'cadenced',
  name: 'Außenrotation der Schulter mit 90°',
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
  description: 'hüftbreiter Stand; Ellenbogen im 90° Winkel und eng am Körper; Schulterblatt tief und nach hinten; Rotation erfolgt über das Schultergelenk',
  categories: ['shoulders']
},{
  id:3,
  etype: 'hold',
  name: 'Banded distraction Pectoralis',
  sets: 2,
  hold: 60,
  break: 45,
  video: 'banded_distraction_pectoralis_720p.mp4',
  description: 'hüftbreiter Stand; Band ist seitlich neben dem Körper; Handfläche nach oben rotiert; Schulterblatt tief und nach hinten; Rotation des Oberkörpers; Arm bleibt gestreckt',
  categories: ['shoulders']

},{
  id:4,
  etype: 'cadenced',
  name: 'Druck mit ausgestrecktem Arm in Ball',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 1,
    postexcentrichold: 2,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 45,
  video: 'schulterstabi_stehend_schulteransicht_720p.mp4',
  description: 'hüftbreiter Stand; Arm ausgestreckt und parallel zum Boden; Hand ist in der Mitte des Balls; Druck in den Ball ausüben und halten; Position des Arms verändert sich nicht; Bewegung kommt nur aus dem Schultergelenk',
  categories: ['shoulders']

},{
  id: 5,
  etype: 'hold',
  name: 'Wanddehnung Pectoralis',
  sets: 3,
  hold: 30,
  break: 30,
  video: 'Wanddehnung Pectoralis',
  description: 'hüftbreiter Stand seitlich zur Wand; Ellenbogen im 90° Winkel; Ellenbogen auf Höhe der Schulter bringen; Handfläche zur Wand drehen; Druck mit Handfläche an Wand; Rotation des Oberkörpers zur Gegenseite der Wand',
  categories: ['shoulders']

},
{
  name: 'Druck mit Arm im 90° Winkel in Ball',
  id: 6,
  etype: 'cadenced',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 1,
    postexcentrichold: 2,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 45,
  video: 'Druck mit Arm im 90° Winkel  in Ball',
  description: 'hüftbreiter Stand; Arm seitlich vom Körper abgespreizt; Ellenbogen im 90° WInkel und auf Höhe der Schulter; Druck mit Ellenbogen in den Ball ausüben und halten; Position des Arms verändert sich nicht; Bewegung kommt nur aus dem Schultergelenk',
  categories: ['shoulders']

},
{
  id: 15,
  etype: 'cadenced',
  name: 'Schwimmer mit Gewicht',
  sets: 3,
  reps: 4,
  cadence: {
    excentric: 1,
    postexcentrichold: 0,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 45,
  video: 'Schwimmer mit Gewicht',
  description: 'Ausgangsposition in Bauchlage; Oberkörper hebt leicht von Matte ab; Arme sind gerade über den Kopf ausgestreckt; Doppelkinn; Arme nach oben anheben; Gewicht vor dem Kopf von einer in die andere Hand übergeben; Arme in W Position zurückziehen; Gewicht auf Rücken übergeben',
  categories: ['back']

},
{
  id: 7,
  etype: 'cadenced',
  name: 'Seitliche Hüftneigung',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 1,
    postexcentrichold: 2,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 30,
  video: 'seitliche Hüftneigung',
  description: 'Rückenlage Füße auf dem Boden aufgestellt und Beine angewinkelt; Becken hat Kontakt zum Boden; Knie langsam zur Seite fallen lassen; Becken hält Kontakt zum Boden',
  categories: ['shoulders']
},
{
  id: 8,
  etype: 'cadenced',
  name: 'Hüftshifts',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 1,
    postexcentrichold: 2,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 45,
  video: 'Hüftshifts',
  description: 'Rückenlage; Beine ausgestreckt und zusammen; Becken hat Kontakt zum Boden; rechtes Bein nach unten drücken und linkes nach oben ziehen; Beine bleiben gestreckt; Becken hält Kontakt zum Boden; Wechsel',
  categories: ['shoulders']
},
{
  id: 9,
  etype: 'cadenced',
  name: 'Ausfallschritt mit Ball',
  sets: 3,
  reps:  8,
  cadence: {
    excentric: 1,
    postexcentrichold: 2,
    concentric: 1,
    postconcentrichold: 0
  },
  break: 45,
  video: 'ausfallschritt_mit_ball.mp4',
  description: 'Ausfallschritt; Ball in beiden Händen halten; Hüfte geht tief; Bauch und Po sind fest angespannt; Arme nehmen Ball gleichzeitig über den Kopf; Knie berührt Boden an unterster Stelle nicht; Ball ist in unterster Position mit ausgestreckten Armen über dem Kopf; Rotation des Oberkörpers zur nicht aufgestellten Seite; aus Ausfallschritt wieder gerade nach oben kommen; Arme gehen gleichzeitig nach unten',
  categories: ['shoulders']
},
{
  id: 10,
  etype: 'hold',
  name: 'Piriformis mit Band',
  sets: 3,
  hold: 30,
  break: 45,
  video: 'piriformis_band.mp4',
  description: 'Rückenlage; Füße auf dem Boden aufgestellt und Beine angewinkelt; Becken hat Kontakt zum Boden; Gummi oberhalb des rechten Knies befestigen; rechten Fuß über linkes Knie legen; Hände um linken Oberschenkel legen; rechtes Bein rotiert nach außen',
  categories: ['shoulders']
},
{
  id: 11,
  etype: 'cadenced',
  name: 'Einbeiniges Beckenheben',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 1,
    postexcentrichold: 0,
    concentric: 1,
    postconcentrichold: 1
  },
  break: 45,
  video: 'einbeiniges Beckenheben',
  description: 'Rückenlage; Füße auf dem Boden aufgestellt und beine angewinkelt;rechtes Knie zur Brust anziehen;Druck über anderes Bein ausüben und Becken nach oben schieben;Spannung halten',
  categories: ['shoulders']
},
{
  id: 12,
  etype: 'cadenced',
  name: 'Außenrotation stehend',
  sets: 3,
  reps: 15,
  cadence: {
    excentric: 2,
    postexcentrichold: 0,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 45,
  video: 'aussenrotation_stehend.mp4',
  description: 'Ausgangsposition im hüftbreiten Stand; Po und Bauch sind fest angespannt; Ellenbogen drückt in Seite; Rotation der Schulter nach Außen; Ellenbogen bleibt fest am Körper; Rotation zurück',
  categories: ['shoulders']
},{
  id: 13,
  etype: 'cadenced',
  name: 'Rotation im Ausfallschritt',
  sets: 3,
  reps:  8,
  cadence: {
    excentric: 2,
    postexcentrichold: 2,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 45,
  video: 'rotation_ausfallschritt.mp4',
  description: 'Ausfallschritt;inneres Bein steht vorne;Seilzug ist seitlich vom Körper;Griff in beiden Händen halten;Bauch und Po sind fest angespannt;Rotation der Oberkörpers mit gestreckten Armen;Arme gehen von unten rechts nach oben links;Blick folgt den Händen',
  categories: ['shoulders']
},
{
  id: 14,
  etype: 'hold',
  name: 'Dehnung Pectoralis mit Gummiband',
  sets: 3,
  hold: 30,
  break: 30,
  video: 'dehnung_pectoralis_gummiband.mp4',
  description: 'hüftbreiter Stand seitlich zur Wand;Gummiband mit Zug von diagonal unten;Handfläche des Armes mit Gummi dreht zur Decke;Rotation des Oberkörpers zur Gegenseite',
  categories: ['shoulders']
}];
