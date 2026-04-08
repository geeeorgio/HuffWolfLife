import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useOnboardingContext } from 'src/hooks/useOnboardingContext';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {
    isContextLoading: isOnboardingContextLoading,
    isOnboardingCompleted,
  } = useOnboardingContext();
  const { isContextLoading: isPersistContextLoading } = usePersistContext();

  if (isOnboardingContextLoading || isPersistContextLoading) {
    return null;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'fade',
        gestureEnabled: false,
      }}
    >
      {isOnboardingCompleted ? (
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
