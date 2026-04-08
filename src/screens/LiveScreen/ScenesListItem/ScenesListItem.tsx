import { memo, useCallback } from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { SceneType } from 'src/types';

interface ScenesListItemProps {
  item: SceneType;
  onPress: (item: SceneType) => void;
}

const ScenesListItem = memo(({ item, onPress }: ScenesListItemProps) => {
  const handlePress = useCallback(() => onPress(item), [item, onPress]);

  return (
    <CustomButton variant="default" style={styles.item} onPress={handlePress}>
      <ImageBackground
        source={item.image}
        style={styles.item}
        resizeMode="cover"
      >
        <CustomText variant="extraBold" style={styles.name}>
          {item.name}
        </CustomText>
      </ImageBackground>
    </CustomButton>
  );
});

export default ScenesListItem;
