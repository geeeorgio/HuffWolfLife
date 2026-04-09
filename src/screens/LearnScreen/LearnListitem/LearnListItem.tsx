import { memo } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { StoryType } from 'src/types';

interface LearnListItemProps {
  item: StoryType;
  onPress: (item: StoryType) => void;
  disabled?: boolean;
}

const LearnListItem = memo(
  ({ item, onPress, disabled }: LearnListItemProps) => {
    return (
      <CustomButton
        variant="default"
        style={styles.item}
        onPress={() => onPress(item)}
        disabled={disabled}
      >
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.overlay} />
          <CustomText variant="extraBold" style={styles.name}>
            {item.title}
          </CustomText>
          <CustomText variant="medium" style={styles.description}>
            {item.short_description}
          </CustomText>
        </View>
      </CustomButton>
    );
  },
);

export default LearnListItem;
