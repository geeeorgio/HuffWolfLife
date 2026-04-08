import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { OnboardingContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const OnboardingContext = createContext<OnboardingContextType | null>(
  null,
);

const OnboardingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingDone, setIsOnboardingDone] = useState(false);

  useEffect(() => {
    const init = async () => {
      const savedOnboarding = await getItemFromStorage<boolean>(
        'is_onboarding_completed',
      );

      if (savedOnboarding !== null) {
        setIsOnboardingDone(savedOnboarding);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  const setIsOnboardingCompleted = useCallback((value: boolean) => {
    setIsOnboardingDone(value);
    setItemInStorage('is_onboarding_completed', value);
  }, []);

  const contextValue = useMemo(
    () => ({
      isContextLoading: isLoading,
      isOnboardingCompleted: isOnboardingDone,
      setIsOnboardingCompleted,
    }),
    [isLoading, isOnboardingDone, setIsOnboardingCompleted],
  );

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContextProvider;
