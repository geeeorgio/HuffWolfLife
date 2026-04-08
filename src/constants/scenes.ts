import { SCENES_IMAGES } from './images';

import type { SceneType } from 'src/types';

export const SCENES: SceneType[] = [
  {
    id: 'strange_sound',
    name: 'Strange Sound',
    image: SCENES_IMAGES.strange_sound,
    description:
      'You hear a faint rustle in the bushes.\nThe forest suddenly feels quieter.',
    options: [
      {
        id: 'move_closer',
        name: 'Move closer',
        description:
          'You step carefully forward.\nThe sound shifts deeper into the shadows.',
      },
      {
        id: 'stay_still',
        name: 'Stay still',
        description:
          'You freeze in place.\nThe forest slowly exhales around you.',
      },
      {
        id: 'step_back',
        name: 'Step back',
        description:
          'You retreat quietly.\nDistance makes you safer, but unsure.',
      },
    ],
  },
  {
    id: 'night_movement',
    name: 'Night Movement',
    image: SCENES_IMAGES.night_movement,
    description: 'The forest is dark.\nYou hear something moving nearby.',
    options: [
      {
        id: 'follow_sound',
        name: 'Follow the sound',
        description:
          'You move silently through the darkness.\nThe presence feels closer now.',
      },
      {
        id: 'stay_hidden',
        name: 'Stay hidden',
        description: 'You stay low and still.\nWhatever it was passes by.',
      },
      {
        id: 'change_direction',
        name: 'Change direction',
        description: 'You shift your path.\nThe tension fades behind you.',
      },
    ],
  },
  {
    id: 'cold_rain',
    name: 'Cold Rain',
    image: SCENES_IMAGES.cold_rain,
    description: 'Rain begins to fall.\nThe ground becomes slippery.',
    options: [
      {
        id: 'keep_moving',
        name: 'Keep moving',
        description:
          'You push forward through the rain.\nYour body stays warm, but tired.',
      },
      {
        id: 'find_shelter',
        name: 'Find shelter',
        description:
          'You hide under thick branches.\nThe rain softens around you.',
      },
      {
        id: 'slow_down',
        name: 'Slow down',
        description: 'You move carefully.\nEach step becomes deliberate.',
      },
    ],
  },
  {
    id: 'hunt_begins',
    name: 'Hunt Begins',
    image: SCENES_IMAGES.hunt_begins,
    description: 'You spot movement ahead.\nSomething is grazing.',
    options: [
      {
        id: 'approach_slowly',
        name: 'Approach slowly',
        description:
          'You move closer with precision.\nEvery step feels controlled.',
      },
      {
        id: 'wait_longer',
        name: 'Wait longer',
        description: 'You observe.\nPatience sharpens your senses.',
      },
      {
        id: 'circle_around',
        name: 'Circle around',
        description: 'You change angle.\nThe target shifts in your view.',
      },
    ],
  },
  {
    id: 'thick_fog',
    name: 'Thick Fog',
    image: SCENES_IMAGES.thick_fog,
    description: 'Fog surrounds you.\nVisibility drops instantly.',
    options: [
      {
        id: 'move_forward',
        name: 'Move forward',
        description:
          'You walk into the unknown.\nShapes begin to appear slowly.',
      },
      {
        id: 'stay_in_place',
        name: 'Stay in place',
        description: 'You remain still.\nThe fog moves around you.',
      },
      {
        id: 'listen_carefully',
        name: 'Listen carefully',
        description:
          'You focus on sound.\nThe forest reveals itself differently.',
      },
    ],
  },
  {
    id: 'fresh_tracks',
    name: 'Fresh Tracks',
    image: SCENES_IMAGES.fresh_tracks,
    description:
      'You notice fresh tracks on the ground.\nThey lead deeper into the forest.',
    options: [
      {
        id: 'follow_tracks',
        name: 'Follow tracks',
        description:
          'You follow the trail.\nIt leads you somewhere unfamiliar.',
      },
      {
        id: 'ignore_tracks',
        name: 'Ignore them',
        description: 'You move on.\nNot everything needs chasing.',
      },
      {
        id: 'observe_carefully',
        name: 'Observe carefully',
        description: 'You study the ground.\nThe story becomes clearer.',
      },
    ],
  },
  {
    id: 'early_morning',
    name: 'Early Morning',
    image: SCENES_IMAGES.early_morning,
    description: 'The sun begins to rise.\nThe forest awakens.',
    options: [
      {
        id: 'explore',
        name: 'Explore',
        description: 'You move into the light.\nThe world feels open.',
      },
      {
        id: 'rest',
        name: 'Rest',
        description: 'You slow down.\nYour body recovers.',
      },
      {
        id: 'watch_surroundings',
        name: 'Watch surroundings',
        description: 'You observe quietly.\nEverything feels alive.',
      },
    ],
  },
  {
    id: 'deep_forest',
    name: 'Deep Forest',
    image: SCENES_IMAGES.deep_forest,
    description:
      'You enter a dense part of the forest.\nIt feels heavier here.',
    options: [
      {
        id: 'go_deeper',
        name: 'Go deeper',
        description: 'You step further in.\nThe forest closes around you.',
      },
      {
        id: 'turn_back',
        name: 'Turn back',
        description: 'You leave the area.\nThe tension fades.',
      },
      {
        id: 'move_slowly',
        name: 'Move slowly',
        description: 'You stay alert.\nEvery detail matters.',
      },
    ],
  },
  {
    id: 'autumn_shift',
    name: 'Autumn Shift',
    image: SCENES_IMAGES.autumn_shift,
    description: 'Leaves fall around you.\nThe air feels colder.',
    options: [
      {
        id: 'move_forward',
        name: 'Move forward',
        description:
          'You walk through falling leaves.\nThe forest feels different.',
      },
      {
        id: 'stay_still',
        name: 'Stay still',
        description: 'You listen.\nThe sound of leaves surrounds you.',
      },
      {
        id: 'change_path',
        name: 'Change path',
        description: 'You shift direction.\nThe space opens slightly.',
      },
    ],
  },
  {
    id: 'near_water',
    name: 'Near Water',
    image: SCENES_IMAGES.near_water,
    description: 'You hear water nearby.\nA river flows ahead.',
    options: [
      {
        id: 'approach_water',
        name: 'Approach water',
        description: 'You step closer.\nThe sound calms you.',
      },
      {
        id: 'stay_away',
        name: 'Stay away',
        description: 'You keep distance.\nSafety feels stronger.',
      },
      {
        id: 'follow_river',
        name: 'Follow river',
        description: 'You move along the flow.\nIt leads you forward.',
      },
    ],
  },
  {
    id: 'sudden_noise',
    name: 'Sudden Noise',
    image: SCENES_IMAGES.sudden_noise,
    description: 'A loud crack breaks the silence.\nEverything stops.',
    options: [
      {
        id: 'run',
        name: 'Run',
        description: 'You react instantly.\nDistance grows fast.',
      },
      {
        id: 'stay',
        name: 'Stay',
        description: 'You hold your ground.\nThe forest remains tense.',
      },
      {
        id: 'investigate',
        name: 'Investigate',
        description: 'You move toward the sound.\nSomething is not right.',
      },
    ],
  },
  {
    id: 'silent_night',
    name: 'Silent Night',
    image: SCENES_IMAGES.silent_night,
    description: 'The forest is completely still.\nNo sound at all.',
    options: [
      {
        id: 'move',
        name: 'Move',
        description: 'You break the silence.\nThe night reacts.',
      },
      {
        id: 'stay',
        name: 'Stay',
        description: 'You become part of the stillness.\nTime slows down.',
      },
      {
        id: 'listen_deeper',
        name: 'Listen deeper',
        description: 'You focus beyond sound.\nThe world feels different.',
      },
    ],
  },
];
