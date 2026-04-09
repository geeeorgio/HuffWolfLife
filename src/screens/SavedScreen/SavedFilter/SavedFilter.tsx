import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { SAVED_TOPICS_LIST } from 'src/types';
import type { SavedTopicType } from 'src/types';

interface SavedFilterProps {
  filter: SavedTopicType;
  setFilter: (filter: SavedTopicType) => void;
  disabled?: boolean;
}

const SavedFilter = ({ filter, setFilter, disabled }: SavedFilterProps) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      {SAVED_TOPICS_LIST.map((topic) => (
        <CustomButton
          key={topic}
          variant={topic === filter ? 'learnActive' : 'learnInactive'}
          style={styles.typeButton}
          onPress={() => setFilter(topic)}
          disabled={disabled}
        >
          <CustomText
            variant="semiBold"
            style={[styles.typeText, topic === filter && styles.activeText]}
          >
            {topic}
          </CustomText>
        </CustomButton>
      ))}
    </View>
  );
};

export default SavedFilter;
