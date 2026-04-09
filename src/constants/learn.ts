import { INSTINCT_IMAGES, PACK_IMAGES, SURVIVAL_IMAGES } from './images';

import type { StoryType } from 'src/types';

export const LEARN_STORIES: StoryType[] = [
  {
    id: 'trust_your_senses',
    type: 'Instinct',
    title: 'Trust Your Senses',
    image: INSTINCT_IMAGES.Trust_Your_Senses,
    short_description: 'Wolves rely on subtle signals from the environment',
    full_description:
      'Wolves don’t need to see danger clearly to react to it.\nThey notice the smallest changes in sound, movement, and scent.\nA sudden silence in the forest can mean something is wrong. A faint rustle might signal prey — or a hidden threat.\nTheir instincts are built on constant awareness. Instead of rushing forward, they pause and observe.\nThis gives them time to understand what’s happening.\nActing too quickly can lead to unnecessary risk.\nTrusting their senses helps them survive in uncertain situations.',
    isFavorite: false,
  },
  {
    id: 'listen_before_acting',
    type: 'Instinct',
    title: 'Listen Before Acting',
    image: INSTINCT_IMAGES.Listen_Before_Acting,
    short_description: 'Listening is often more important than moving.',
    full_description:
      'Wolves spend more time listening than acting.\nBefore making a move, they gather information from their surroundings.\nThe forest is full of sounds — each one carries meaning.\nThey can tell distance, direction, and danger through subtle noise.\nEven the wind and leaves can reveal hidden movement.\nBy staying still, they avoid giving away their position.\nThis patience allows them to make smarter decisions.\nRushing forward without understanding can lead to danger.\nListening first gives them control over the situation.',
    isFavorite: false,
  },
  {
    id: 'pause_before_you_move',
    type: 'Instinct',
    title: 'Pause Before You Move',
    image: INSTINCT_IMAGES.Pause_Before_YouMove,
    short_description: 'Stillness can be the safest decision.',
    full_description:
      'Wolves don’t always act immediately. When something feels uncertain, they pause.\nThis moment of stillness allows them to assess the situation.\nMoving too quickly can attract attention.\nStaying still often makes them invisible to threats.\nIt also helps them better understand their surroundings.\nIn many cases, waiting reveals more than acting.\nThis controlled patience is part of their survival instinct.\nSometimes, doing nothing is the smartest choice.',
    isFavorite: false,
  },
  {
    id: 'stay_aware',
    type: 'Instinct',
    title: 'Stay Aware',
    image: INSTINCT_IMAGES.Stay_Aware,
    short_description: 'Constant awareness keeps wolves safe.',
    full_description:
      'Wolves are always aware of their environment.\nEven when resting, they stay alert to changes around them.\nThey continuously scan their surroundings for movement.\nTheir awareness is not stressful — it is natural.\nThis allows them to react quickly when needed.\nDanger rarely appears without warning signs.\nBeing attentive helps them notice those signs early.\nAwareness also helps them locate opportunities.\nThis balance of calm and alertness is key to survival.',
    isFavorite: false,
  },
  {
    id: 'stay_together',
    type: 'Pack',
    title: 'Stay Together',
    image: PACK_IMAGES.Stay_Together,
    short_description: 'Wolves rely on the strength of the pack.',
    full_description:
      'Wolves are rarely alone for long.\nTheir survival depends on staying connected to the pack.\nEach member plays an important role in the group.\nTogether, they can hunt, protect, and navigate more effectively.\nSeparation increases vulnerability.\nBeing part of a pack provides safety and support.\nThey communicate constantly to maintain unity.\nTrust between members is essential.\nStrength comes not from the individual, but from the group.',
    isFavorite: false,
  },
  {
    id: 'communication_matters',
    type: 'Pack',
    title: 'Communication Matters',
    image: PACK_IMAGES.Communication_Matters,
    short_description: 'Wolves communicate constantly to stay coordinated.',
    full_description:
      'Wolves use a variety of signals to communicate.\nThey rely on body language, sound, and movement.\nA simple look or posture can send a clear message.\nHowling helps them stay connected over distance.\nEven silence can carry meaning.\nClear communication keeps the pack organized.\nIt prevents conflict and confusion.\nEvery member understands their role through these signals.\nStrong communication is key to survival.',
    isFavorite: false,
  },
  {
    id: 'know_your_role',
    type: 'Pack',
    title: 'Know Your Role',
    image: PACK_IMAGES.Know_Your_Role,
    short_description: 'Every wolf has a role within the pack.',
    full_description:
      'Each wolf contributes differently to the pack.\nSome lead, others observe and support.\nRoles are not random — they develop over time.\nUnderstanding your role brings balance to the group.\nWolves do not compete for control constantly.\nThey follow structure and trust each other.\nThis organization makes the pack efficient.\nWithout roles, chaos would take over.\nClarity in position creates harmony.',
    isFavorite: false,
  },
  {
    id: 'protect_the_pack',
    type: 'Pack',
    title: 'Protect the Pack',
    image: PACK_IMAGES.Protect_the_Pack,
    short_description: 'Wolves prioritize the safety of the group.',
    full_description:
      'Wolves are deeply protective of their pack.\nThey stay alert to threats at all times.\nWhen danger appears, they act together.\nProtection is a shared responsibility.\nThey position themselves strategically to defend.\nNo member is left behind.\nThis loyalty strengthens their survival chances.\nTheir awareness extends beyond themselves.\nThe safety of the pack always comes first.',
    isFavorite: false,
  },
  {
    id: 'hunt_smart',
    type: 'Survival',
    title: 'Hunt Smart',
    image: SURVIVAL_IMAGES.Hunt_Smart,
    short_description: 'Wolves rely on strategy, not strength alone.',
    full_description:
      'Wolves do not hunt blindly. They observe and plan before acting.\nTiming is more important than speed.\nThey choose targets carefully.\nEnergy must be used wisely.\nA failed hunt can mean lost resources.\nThey coordinate their actions as a group.\nPatience increases their chances of success.\nSmart decisions ensure survival.',
    isFavorite: false,
  },
  {
    id: 'adapt_to_change',
    type: 'Survival',
    title: 'Adapt to Change',
    image: SURVIVAL_IMAGES.Adapt_to_Change,
    short_description: 'Wolves adjust quickly to new conditions.',
    full_description:
      'The environment is constantly changing.\nWolves adapt to weather, terrain, and conditions.\nRain, cold, or darkness do not stop them.\nThey shift their behavior based on the situation.\nFlexibility increases their survival chances.\nThey do not resist change — they adjust to it.\nThis ability keeps them resilient.\nAdapting is not weakness, but strength.\nSurvival depends on it.',
    isFavorite: false,
  },
  {
    id: 'move_at_the_right_time',
    type: 'Survival',
    title: 'Move at the Right Time',
    image: SURVIVAL_IMAGES.Move_at_the_Right_Time,
    short_description: 'Timing matters more than action.',
    full_description:
      'Wolves are careful about when they move.\nThey often choose night or low visibility.\nDarkness gives them an advantage.\nMoving at the wrong time can expose them.\nThey wait for the right moment.\nPatience helps them stay unseen.\nThey understand rhythm in nature.\nActing at the right time changes everything.\nTiming is a survival tool.',
    isFavorite: false,
  },
  {
    id: 'conserve_energy',
    type: 'Survival',
    title: 'Conserve Energy',
    image: SURVIVAL_IMAGES.Conserve_Energy,
    short_description: 'Wolves use energy wisely to survive longer.',
    full_description:
      'Energy is one of the most valuable resources.\nWolves do not waste it unnecessarily.\nThey rest when needed and act with purpose.\nEvery movement has a reason.\nOverexertion can be dangerous.\nThey balance activity and rest carefully.\nThis helps them endure harsh conditions.\nEfficiency is key to survival.\nSaving energy means staying alive longer.',
    isFavorite: false,
  },
];
