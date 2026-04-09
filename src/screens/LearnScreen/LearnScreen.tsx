import type { RouteProp } from '@react-navigation/native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LearnSetup from './LearnSetup/LearnSetup';
import LearnStoryDetails from './LearnStoryDetails/LearnStoryDetails';
import { styles } from './styles';

import { usePersistContext } from 'src/hooks/usePersistContext';
import type {
  FilterType,
  MainStackNavigationProp,
  MainStackParamList,
  StoryType,
} from 'src/types';

const LearnScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { learningStoryList, setContextLearningStoriesIds } =
    usePersistContext();

  const { params } = useRoute<RouteProp<MainStackParamList, 'LearnScreen'>>();
  const storyId = params?.storyId;
  const fromSaved = params?.fromSaved;

  const [filter, setFilter] = useState<FilterType>('All');
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null);

  useEffect(() => {
    if (storyId) {
      setCurrentStoryId(storyId);
    }
  }, [storyId]);

  const handleFilterPress = useCallback((value: FilterType) => {
    setFilter(value);
  }, []);

  const handleStoryPress = useCallback((item: StoryType) => {
    setCurrentStoryId(item.id);
  }, []);

  const handleBackPress = useCallback(() => {
    if (fromSaved) {
      navigation.navigate('SavedScreen');
      return;
    }

    setCurrentStoryId(null);
  }, [navigation, fromSaved]);

  const handleFavoritePress = useCallback(
    (id: string) => {
      setContextLearningStoriesIds(id);
    },
    [setContextLearningStoriesIds],
  );

  const stories = useMemo(() => {
    return learningStoryList.filter(
      (story) => story.type === filter || filter === 'All',
    );
  }, [filter, learningStoryList]);

  const currentStory = useMemo(() => {
    return learningStoryList.find((story) => story.id === currentStoryId);
  }, [currentStoryId, learningStoryList]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentStoryId(null);
        navigation.setParams({ storyId: undefined, fromSaved: undefined });
        setFilter('All');
      };
    }, [navigation]),
  );

  return (
    <SafeAreaView style={styles.container}>
      {currentStory ? (
        <LearnStoryDetails
          story={currentStory}
          onBackPress={handleBackPress}
          onFavoritePress={handleFavoritePress}
        />
      ) : (
        <LearnSetup
          filter={filter}
          stories={stories}
          handleFilterPress={handleFilterPress}
          handleStoryPress={handleStoryPress}
        />
      )}
    </SafeAreaView>
  );
};

export default LearnScreen;
