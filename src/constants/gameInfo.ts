import { ONBD_IMAGES, QUIZ_IMAGE, SMALL_LOGO } from './images';

export const ONBOARDING_INFO = {
  onboarding_1: {
    index: 0,
    title: 'Start Your Journey',
    description: 'Explore the world through the\neyes of a wolf',
    image: ONBD_IMAGES.onbd_0,
    buttonText: 'Continue',
  },
  onboarding_2: {
    index: 1,
    title: 'Think Like a Wolf',
    description: 'Make choices and see how a\nwolf survives in the wild',
    image: ONBD_IMAGES.onbd_1,
    buttonText: 'Next',
  },
  onboarding_3: {
    index: 2,
    title: 'Learn How They Live',
    description: 'Daily life, instincts, and survival\nin nature',
    image: ONBD_IMAGES.onbd_2,
    buttonText: 'Next',
  },
  onboarding_4: {
    index: 3,
    title: 'Challenge Your Mind',
    description: 'Answer questions and see how\nwell you understand the wild',
    image: ONBD_IMAGES.onbd_3,
    buttonText: 'Next',
  },
  onboarding_5: {
    index: 4,
    title: 'Begin Your Path',
    description: 'Step into the world\nof the wolf',
    image: ONBD_IMAGES.onbd_4,
    buttonText: 'Start',
  },
};

export const LIVE_SCREEN_INFO = {
  title: 'Live as a Wolf',
  image: SMALL_LOGO,
  description:
    'Choose a scene, step into the role of a wolf, and discover how your decisions shape the outcome.',
};

export const LEARN_SCREEN_INFO = {
  title: 'Learn the Wolf',
  image: SMALL_LOGO,
  description:
    'Choose a category, tap a topic, and learn how wolves think, act, and survive.',
};

export const WORLD_SCREEN_INFO = {
  title: 'Wolf World',
  image: SMALL_LOGO,
  description:
    'Dive into different environments and see how wolves adapt, move, and live in each one.',
};

export const SAVED_SCREEN_INFO = {
  title: 'Saved',
  image: SMALL_LOGO,
  description:
    'Your saved insights and worlds will appear here.\nSave what you like to revisit anytime.',
  empty_learn_text: 'No saved topics yet.\nExplore and save what you like.',
  empty_world_text:
    'No saved worlds yet.\nExplore Wolf World and save the ones you like.',
};

export const QUIZ_SCREEN_INFO = {
  title: 'Test Your Instinct',
  wolf_image: SMALL_LOGO,
  description:
    'Test your understanding of wolf behavior and instincts.\nChoose the best answers and see how closely you think like a wolf.',
  quiz_image: QUIZ_IMAGE,
  buttonText: 'Start quiz',
};
