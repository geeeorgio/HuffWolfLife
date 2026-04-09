import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LearnList from '../LearnScreen/LearnList/LearnList';
import WorldList from '../WorldScreen/WorldList/WorldList';

import SavedFilter from './SavedFilter/SavedFilter';
import { styles } from './styles';

import { CustomContainer, CustomText, InfoContainer } from 'src/components';
import { SAVED_SCREEN_INFO } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type {
  MainStackNavigationProp,
  SavedTopicType,
  StoryType,
  WorldType,
} from 'src/types';

const SavedScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { learningStoryList, worldList } = usePersistContext();

  const [savedTopic, setSavedTopic] =
    useState<SavedTopicType>('Learn the Wolf');

  const handleTopicPress = useCallback((topic: SavedTopicType) => {
    setSavedTopic(topic);
  }, []);

  const handleLearnPress = useCallback(
    (item: StoryType) => {
      navigation.navigate('LearnScreen', { storyId: item.id, fromSaved: true });
    },
    [navigation],
  );

  const handleWorldPress = useCallback(
    (item: WorldType) => {
      navigation.navigate('WorldScreen', { worldId: item.id, fromSaved: true });
    },
    [navigation],
  );

  const savedLearnList = useMemo(() => {
    return learningStoryList.filter((story) => story.isFavorite);
  }, [learningStoryList]);

  const savedWorldList = useMemo(() => {
    return worldList.filter((world) => world.isFavorite);
  }, [worldList]);

  const learnListIsEmpty = savedLearnList.length === 0;
  const worldListIsEmpty = savedWorldList.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <CustomText variant="extraBold" style={styles.title}>
        {SAVED_SCREEN_INFO.title}
      </CustomText>

      <InfoContainer
        image={SAVED_SCREEN_INFO.image}
        description={SAVED_SCREEN_INFO.description}
      />

      <SavedFilter filter={savedTopic} setFilter={handleTopicPress} />

      {savedTopic === 'Learn the Wolf' ? (
        <>
          {learnListIsEmpty ? (
            <CustomContainer
              colorVariant="darkGreen"
              style={styles.emptyContainer}
            >
              <CustomText variant="semiBold" style={styles.emptyText}>
                {SAVED_SCREEN_INFO.empty_learn_text}
              </CustomText>
            </CustomContainer>
          ) : (
            <LearnList data={savedLearnList} onPress={handleLearnPress} />
          )}
        </>
      ) : (
        <>
          {worldListIsEmpty ? (
            <CustomContainer
              colorVariant="darkGreen"
              style={styles.emptyContainer}
            >
              <CustomText variant="semiBold" style={styles.emptyText}>
                {SAVED_SCREEN_INFO.empty_world_text}
              </CustomText>
            </CustomContainer>
          ) : (
            <WorldList data={savedWorldList} onPress={handleWorldPress} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default SavedScreen;
