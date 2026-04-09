import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LearnSetup from './LearnSetup/LearnSetup';
import LearnStoryDetails from './LearnStoryDetails/LearnStoryDetails';
import { styles } from './styles';

import { usePersistContext } from 'src/hooks/usePersistContext';
import type { FilterType, StoryType } from 'src/types';

const LearnScreen = () => {
  const { learningStoryList, setContextLearningStoriesIds } =
    usePersistContext();

  const [filter, setFilter] = useState<FilterType>('All');
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null);

  const handleFilterPress = useCallback((value: FilterType) => {
    setFilter(value);
  }, []);

  const handleStoryPress = useCallback((item: StoryType) => {
    setCurrentStoryId(item.id);
  }, []);

  const handleBackPress = useCallback(() => {
    setCurrentStoryId(null);
  }, []);

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
