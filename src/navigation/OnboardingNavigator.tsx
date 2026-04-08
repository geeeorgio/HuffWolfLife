import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen_0,
  OnboardingScreen_1,
  OnboardingScreen_2,
  OnboardingScreen_3,
  OnboardingScreen_4,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnbdStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnbdStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      <OnbdStack.Screen
        name="OnboardingScreen_0"
        component={OnboardingScreen_0}
      />
      <OnbdStack.Screen
        name="OnboardingScreen_1"
        component={OnboardingScreen_1}
      />
      <OnbdStack.Screen
        name="OnboardingScreen_2"
        component={OnboardingScreen_2}
      />
      <OnbdStack.Screen
        name="OnboardingScreen_3"
        component={OnboardingScreen_3}
      />
      <OnbdStack.Screen
        name="OnboardingScreen_4"
        component={OnboardingScreen_4}
      />
    </OnbdStack.Navigator>
  );
};

export default OnboardingNavigator;
