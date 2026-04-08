import React from 'react';
import { View } from 'react-native';

import ScenesList from '../ScenesList/ScenesList';

import { styles } from './styles';

import { CustomText, InfoContainer } from 'src/components';
import { LIVE_SCREEN_INFO } from 'src/constants';
import type { SceneType } from 'src/types';

interface ScreenSetupProps {
  handleScenePress: (item: SceneType) => void;
}

const ScreenSetup = ({ handleScenePress }: ScreenSetupProps) => {
  return (
    <View style={styles.container}>
      <CustomText variant="extraBold" style={styles.title}>
        {LIVE_SCREEN_INFO.title}
      </CustomText>

      <InfoContainer
        image={LIVE_SCREEN_INFO.image}
        description={LIVE_SCREEN_INFO.description}
      />

      <ScenesList onPress={handleScenePress} />
    </View>
  );
};

export default ScreenSetup;
