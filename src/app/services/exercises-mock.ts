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
  video: 'paddeln_auf_ab_rescaled.mp4',
  description: 'Bauchlage;Daumen zeigen zur Decke;Oberkörper leicht anheben;Kopf tief halten;Paddelbewegung auf und ab ohne Arme auf dem Boden abzusetzen',
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
  video: 'aussenrotation_schulter_seilzug_tief_rescaled.mp4',
  description: 'hüftbreiter Stand; Ellenbogen im 90° Winkel und eng am Körper; Schulterblatt tief und nach hinten; Rotation erfolgt über das Schultergelenk',
  categories: ['shoulders']
},{
  id:3,
  etype: 'hold',
  name: 'Banded distraction Pectoralis',
  sets: 2,
  hold: 60,
  break: 45,
  video: '',
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
  video: 'schulter_druecken_frontal_rescaled.mp4',
  description: 'hüftbreiter Stand; Arm ausgestreckt und parallel zum Boden; Hand ist in der Mitte des Balls; Druck in den Ball ausüben und halten; Position des Arms verändert sich nicht; Bewegung kommt nur aus dem Schultergelenk',
  categories: ['shoulders']

},{
  id: 5,
  etype: 'hold',
  name: 'Dehnung Pectoralis',
  sets: 3,
  hold: 30,
  break: 30,
  video: 'dehnung_brust_rescaled.mp4',
  description: 'hüftbreiter Stand seitlich zur Wand; Ellenbogen im 90° Winkel; Ellenbogen auf Höhe der Schulter bringen; Handfläche zur Wand drehen; Druck mit Handfläche an Wand; Rotation des Oberkörpers zur Gegenseite der Wand',
  categories: ['shoulders']

},
{
  name: 'Druck mit Ellenbogen in Ball',
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
  video: 'schulter_druecken_frontal_rescaled.mp4',
  description: 'hüftbreiter Stand; Arm seitlich vom Körper abgespreizt; Ellenbogen im 90° WInkel und auf Höhe der Schulter; Druck mit Ellenbogen in den Ball ausüben und halten; Position des Arms verändert sich nicht; Bewegung kommt nur aus dem Schultergelenk',
  categories: ['shoulders']

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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: 'becken_bruecke_einbein_rescaled.mp4',
  description: 'Rückenlage;Füße auf dem Boden aufgestellt und beine angewinkelt;rechtes Knie zur Brust anziehen;Druck über anderes Bein ausüben und Becken nach oben schieben;Spannung halten',
  categories: ['shoulders']
},
{
  id: 14,
  etype: 'hold',
  name: 'Dehnung Pectoralis mit Gummiband',
  sets: 3,
  hold: 30,
  break: 30,
  video: '',
  description: 'hüftbreiter Stand seitlich zur Wand;Gummiband mit Zug von diagonal unten;Handfläche des Armes mit Gummi dreht zur Decke;Rotation des Oberkörpers zur Gegenseite',
  categories: ['shoulders']
},
{
  id: 16,
  etype: 'hold',
  name: 'Couch Stretch – Dehnung vorderer Oberschenkel',
  sets: 3,
  hold: 25,
  break: 30,
  video: 'dehnung_oberschenkel_vorne_rescaled.mp4',
  description: 'Vorderes Bein 90° aufgestellt;hinteres Bein auf dem Boden platzieren;Fuß auf Stuhl;Becken/Knie nach vorne schieben (Vorderes Bein)',
  categories: ['thighs']
},
{
  id: 17,
  etype: 'hold',
  name: 'Quadratus lumborum in Seitlage',
  sets: 3,
  hold: 25,
  break: 30,
  video: 'dehnung_m_quadratus_lumborum_seitlage_rescaled.mp4',
  description: 'Seitlage;Unteres Bein leicht gebeugt; oberes Bein gestreckt;obenliegender Arm gestreckt über Kopf;Ausführung: Oberer Arm spannt gerade zur Wand (Körperentlang);Oberes Bein spannt zur Wand (Körperentlang)',
  categories: ['back']
},
{
  id: 18,
  etype: 'hold',
  name: 'Unterarmdehnung im Vierfüßlerstand',
  sets: 3,
  hold: 25,
  break: 30,
  video: 'dehnung_unterarm_rescaled.mp4',
  description: 'Kniende Position beide Beine;Handflächen mit Fingern zum Knie positionieren;Gesäß zur Ferse führen',
  categories: ['shoulders']
},
{
  id: 19,
  etype: 'hold',
  name: '90-90 Stretch',
  sets: 3,
  hold: 25,
  break: 30,
  video: 'dehnung_schraeger_ruecken_rescaled.mp4',
  description: 'Seitlage;Knie und Hüfte in 90° positionieren;Obenliegender Arm mit Handrücken zum Boden führen;Durch Oberkörper rotieren',
  categories: ['back']
},
{
  id: 20,
  etype: 'hold',
  name: 'Außenrotation Schulter hoch',
  sets: 3,
  hold:  15,
  break: 30,
  video: 'aussenrotation_schulter_seilzug_hoch_rescaled.mp4',
  categories: ['shoulders'],
  description: 'Seilzug ganz tief einstellen;Ellenbogen auf Schulterhöher positionieren;Hand nach hinten führen bis auf Schulterhöhe; Danach Hand wieder zurück führen'
},
{
  id: 21,
  etype: 'hold',
  name: 'Schulterkreisen frontal',
  sets: 3,
  hold: 30,
  break: 30,
  description: 'Arm in 90° positionieren;Druck in den Ball (Spannung halten); kreisen nach außen; Oberkörper bewegt sich nicht mit',
  video:'',
  categories: ['shoulders']
},
{
  id: 22,
  etype: 'cadenced',
  name: 'Kreuzheben',
  sets: 3,
  reps: 10,
  cadence: {
    excentric: 2,
    postexcentrichold: 0,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 30,
  description: 'Hüftbreiter Stand;Langhantel am Knie entlang nach oben führen;Becken leicht nach vorne schieben;Achtung: Kein Hohlkreuz + Beine leicht gebeugt',
  video: 'kreuzheben_rescaled.mp4',
  categories: ['back']
},
{
  id: 23,
  etype: 'cadenced',
  name: 'Y W T',
  sets: 3,
  reps: 15,
  cadence: {
    excentric: 2,
    postexcentrichold: 0,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 30,
  description: 'Hüftbreiter Stand; Knie leicht gebeugt; Oberkörper leicht nach vorne nehmen ( gerader Rücken ); Arme zur Decke nehmen – Ellenbogen zum Körper – Handflächen nach außen',
  video: 'ywt_rescaled.mp4',
  categories: ['shoulders']
},
{
  id: 24,
  etype: 'cadenced',
  name: 'Rudern mit Rotation am Seilzug',
  sets: 3,
  reps: 15,
  cadence: {
    excentric: 2,
    postexcentrichold: 0,
    concentric: 2,
    postconcentrichold: 0
  },
  break: 30,
  description: 'Sitzend;beide Hände umfassen Armmanschette;Oberkörper rotiert zur Seite;Ellenbogen nach hinten führen',
  video: '',
  categories: ['shoulders']
},
{
  id: 25,
  etype: 'hold',
  name: 'Plank',
  sets: 3,
  hold: 15,
  break: 30,
  description: 'Bauchlage;Fersen aufstellen;Arme aufgestützt;Ellenbogen unter Schulter positionieren;Hand auf Höhe der Ellenbogen;Oberkörper leicht anheben;Bauchspannung und Gesäßspannung halten',
  video: 'unterarmstuetz_rescaled.mp4',
  categories: ['shoulders']
},
{
  id: 27,
  etype: 'hold',
  per_side: true,
  name: 'Um den Körper herum',
  sets: 3,
  hold: 10,
  break: 30,
  description: 'Bauchlage; Handrücken zur Decke zeigend; Beide Arme anheben; 1 Arm zur Lendenwirbelsäule führen (Ball oder Hantel in der Hand halten); anderer Arm übernimmt; Arm wieder nach vorne führen',
  video: 'um_koerper_herum_rescaled.mp4',
  categories: ['back']
},
{
  id: 28,
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
  video: '',
  description: 'Ausgangsposition in Bauchlage; Oberkörper hebt leicht von Matte ab; Arme sind gerade über den Kopf ausgestreckt; Doppelkinn; Arme nach oben anheben; Gewicht vor dem Kopf von einer in die andere Hand übergeben; Arme in W Position zurückziehen; Gewicht auf Rücken übergeben',
  categories: ['back']
},];
