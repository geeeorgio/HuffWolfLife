import { View } from 'react-native';

import LearnList from '../LearnList/LearnList';

import { styles } from './styles';

import { CustomFilter, CustomText, InfoContainer } from 'src/components';
import { LEARN_SCREEN_INFO } from 'src/constants';
import type { FilterType, StoryType } from 'src/types';

interface LearnSetupProps {
  filter: FilterType;
  stories: StoryType[];
  handleFilterPress: (value: FilterType) => void;
  handleStoryPress: (item: StoryType) => void;
}

const LearnSetup = ({
  filter,
  stories,
  handleFilterPress,
  handleStoryPress,
}: LearnSetupProps) => {
  return (
    <View style={styles.container}>
      <CustomText variant="semiBold" style={styles.title}>
        {LEARN_SCREEN_INFO.title}
      </CustomText>

      <InfoContainer
        image={LEARN_SCREEN_INFO.image}
        description={LEARN_SCREEN_INFO.description}
      />

      <CustomFilter filter={filter} setFilter={handleFilterPress} />

      <LearnList data={stories} onPress={handleStoryPress} />
    </View>
  );
};

export default LearnSetup;
