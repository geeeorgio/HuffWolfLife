import type { ImageSourcePropType } from 'react-native';

export type SceneOptionType = {
  id: string;
  name: string;
  description: string;
};

export type SceneType = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  description: string;
  options: SceneOptionType[];
};

export const LEARN_STORIES_TYPES = ['Instinct', 'Pack', 'Survival'] as const;
export type LearnStoryType = (typeof LEARN_STORIES_TYPES)[number];

export type StoryType = {
  id: string;
  type: LearnStoryType;
  title: string;
  short_description: string;
  full_description: string;
  image: ImageSourcePropType;
  isFavorite: boolean;
};

export const FILTER_TYPES = ['All', 'Instinct', 'Pack', 'Survival'] as const;
export type FilterType = (typeof FILTER_TYPES)[number];

export type WorldType = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  description: string;
  behavior: string;
  survival: string;
  climate: string;
  isFavorite: boolean;
};

export type QuizQuestionType = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const SCENE_STATUS_LIST = ['idle', 'pending', 'finish'] as const;
export type SceneStatusType = (typeof SCENE_STATUS_LIST)[number];
