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
      'Wolves don’t need to see danger clearly to react to it. They notice the smallest changes in sound, movement, and scent. A sudden silence in the forest can mean something is wrong. A faint rustle might signal prey — or a hidden threat. Their instincts are built on constant awareness. Instead of rushing forward, they pause and observe. This gives them time to understand what’s happening. Acting too quickly can lead to unnecessary risk. Trusting their senses helps them survive in uncertain situations.',
    isFavorite: false,
  },
  {
    id: 'listen_before_acting',
    type: 'Instinct',
    title: 'Listen Before Acting',
    image: INSTINCT_IMAGES.Listen_Before_Acting,
    short_description: 'Listening is often more important than moving.',
    full_description:
      'Wolves spend more time listening than acting. Before making a move, they gather information from their surroundings. The forest is full of sounds — each one carries meaning. They can tell distance, direction, and danger through subtle noise. Even the wind and leaves can reveal hidden movement. By staying still, they avoid giving away their position. This patience allows them to make smarter decisions. Rushing forward without understanding can lead to danger. Listening first gives them control over the situation.',
    isFavorite: false,
  },
  {
    id: 'pause_before_you_move',
    type: 'Instinct',
    title: 'Pause Before You Move',
    image: INSTINCT_IMAGES.Pause_Before_YouMove,
    short_description: 'Stillness can be the safest decision.',
    full_description:
      'Wolves don’t always act immediately. When something feels uncertain, they pause. This moment of stillness allows them to assess the situation. Moving too quickly can attract attention. Staying still often makes them invisible to threats. It also helps them better understand their surroundings. In many cases, waiting reveals more than acting. This controlled patience is part of their survival instinct. Sometimes, doing nothing is the smartest choice.',
    isFavorite: false,
  },
  {
    id: 'stay_aware',
    type: 'Instinct',
    title: 'Stay Aware',
    image: INSTINCT_IMAGES.Stay_Aware,
    short_description: 'Constant awareness keeps wolves safe.',
    full_description:
      'Wolves are always aware of their environment. Even when resting, they stay alert to changes around them. They continuously scan their surroundings for movement. Their awareness is not stressful — it is natural. This allows them to react quickly when needed. Danger rarely appears without warning signs. Being attentive helps them notice those signs early. Awareness also helps them locate opportunities. This balance of calm and alertness is key to survival.',
    isFavorite: false,
  },
  {
    id: 'stay_together',
    type: 'Pack',
    title: 'Stay Together',
    image: PACK_IMAGES.Stay_Together,
    short_description: 'Wolves rely on the strength of the pack.',
    full_description:
      'Wolves are rarely alone for long. Their survival depends on staying connected to the pack. Each member plays an important role in the group. Together, they can hunt, protect, and navigate more effectively. Separation increases vulnerability. Being part of a pack provides safety and support. They communicate constantly to maintain unity. Trust between members is essential. Strength comes not from the individual, but from the group.',
    isFavorite: false,
  },
  {
    id: 'communication_matters',
    type: 'Pack',
    title: 'Communication Matters',
    image: PACK_IMAGES.Communication_Matters,
    short_description: 'Wolves communicate constantly to stay coordinated.',
    full_description:
      'Wolves use a variety of signals to communicate. They rely on body language, sound, and movement. A simple look or posture can send a clear message. Howling helps them stay connected over distance. Even silence can carry meaning. Clear communication keeps the pack organized. It prevents conflict and confusion. Every member understands their role through these signals. Strong communication is key to survival.',
    isFavorite: false,
  },
  {
    id: 'know_your_role',
    type: 'Pack',
    title: 'Know Your Role',
    image: PACK_IMAGES.Know_Your_Role,
    short_description: 'Every wolf has a role within the pack.',
    full_description:
      'Each wolf contributes differently to the pack. Some lead, others observe and support. Roles are not random — they develop over time. Understanding your role brings balance to the group. Wolves do not compete for control constantly. They follow structure and trust each other. This organization makes the pack efficient. Without roles, chaos would take over. Clarity in position creates harmony.',
    isFavorite: false,
  },
  {
    id: 'protect_the_pack',
    type: 'Pack',
    title: 'Protect the Pack',
    image: PACK_IMAGES.Protect_the_Pack,
    short_description: 'Wolves prioritize the safety of the group.',
    full_description:
      'Wolves are deeply protective of their pack. They stay alert to threats at all times. When danger appears, they act together. Protection is a shared responsibility. They position themselves strategically to defend. No member is left behind. This loyalty strengthens their survival chances. Their awareness extends beyond themselves. The safety of the pack always comes first.',
    isFavorite: false,
  },
  {
    id: 'hunt_smart',
    type: 'Survival',
    title: 'Hunt Smart',
    image: SURVIVAL_IMAGES.Hunt_Smart,
    short_description: 'Wolves rely on strategy, not strength alone.',
    full_description:
      'Wolves do not hunt blindly. They observe and plan before acting. Timing is more important than speed. They choose targets carefully. Energy must be used wisely. A failed hunt can mean lost resources. They coordinate their actions as a group. Patience increases their chances of success. Smart decisions ensure survival.',
    isFavorite: false,
  },
  {
    id: 'adapt_to_change',
    type: 'Survival',
    title: 'Adapt to Change',
    image: SURVIVAL_IMAGES.Adapt_to_Change,
    short_description: 'Wolves adjust quickly to new conditions.',
    full_description:
      'The environment is constantly changing. Wolves adapt to weather, terrain, and conditions. Rain, cold, or darkness do not stop them. They shift their behavior based on the situation. Flexibility increases their survival chances. They do not resist change — they adjust to it. This ability keeps them resilient. Adapting is not weakness, but strength. Survival depends on it.',
    isFavorite: false,
  },
  {
    id: 'move_at_the_right_time',
    type: 'Survival',
    title: 'Move at the Right Time',
    image: SURVIVAL_IMAGES.Move_at_the_Right_Time,
    short_description: 'Timing matters more than action.',
    full_description:
      'Wolves are careful about when they move. They often choose night or low visibility. Darkness gives them an advantage. Moving at the wrong time can expose them. They wait for the right moment. Patience helps them stay unseen. They understand rhythm in nature. Acting at the right time changes everything. Timing is a survival tool.',
    isFavorite: false,
  },
  {
    id: 'conserve_energy',
    type: 'Survival',
    title: 'Conserve Energy',
    image: SURVIVAL_IMAGES.Conserve_Energy,
    short_description: 'Wolves use energy wisely to survive longer.',
    full_description:
      'Energy is one of the most valuable resources. Wolves do not waste it unnecessarily. They rest when needed and act with purpose. Every movement has a reason. Overexertion can be dangerous. They balance activity and rest carefully. This helps them endure harsh conditions. Efficiency is key to survival. Saving energy means staying alive longer.',
    isFavorite: false,
  },
];
