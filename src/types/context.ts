import type { StoryType, WorldType } from './gameplay';

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isOnboardingCompleted: boolean;
  setIsOnboardingCompleted: (value: boolean) => void;
};

export type PersistContextType = {
  isContextLoading: boolean;
  //
  learningStoryList: StoryType[];
  contextLearningStoriesIds: string[];
  setContextLearningStoriesIds: (id: string) => void;
  //
  worldList: WorldType[];
  contextWorldIds: string[];
  setContextWorldIds: (id: string) => void;
};
