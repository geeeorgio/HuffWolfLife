import { memo } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { WorldType } from 'src/types';

interface WorldListItemProps {
  item: WorldType;
  onPress: (item: WorldType) => void;
  disabled?: boolean;
}

const WorldListItem = memo(
  ({ item, onPress, disabled }: WorldListItemProps) => {
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
            {item.name}
          </CustomText>
          <CustomText variant="medium" style={styles.description}>
            {item.description}
          </CustomText>
        </View>
      </CustomButton>
    );
  },
);

export default WorldListItem;
