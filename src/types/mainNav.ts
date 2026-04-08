import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  LiveScreen: undefined;
  LearnScreen: undefined;
  WorldScreen: undefined;
  QuizScreen: undefined;
  SavedScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
