import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from 'src/components';
import {
  LearnScreen,
  LiveScreen,
  QuizScreen,
  SavedScreen,
  WorldScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createBottomTabNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="LiveScreen"
    >
      <MainStack.Screen name="LiveScreen" component={LiveScreen} />
      <MainStack.Screen name="LearnScreen" component={LearnScreen} />
      <MainStack.Screen name="WorldScreen" component={WorldScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
      <MainStack.Screen name="SavedScreen" component={SavedScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
