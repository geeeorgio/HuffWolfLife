import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  LiveScreen: undefined;
  LearnScreen: { storyId?: string; fromSaved?: boolean };
  WorldScreen: { worldId?: string; fromSaved?: boolean };
  QuizScreen: undefined;
  SavedScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
