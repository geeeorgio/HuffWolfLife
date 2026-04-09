import { View } from 'react-native';

import WorldList from '../WorldList/WorldList';

import { styles } from './styles';

import { CustomText, InfoContainer } from 'src/components';
import { WORLD_SCREEN_INFO } from 'src/constants';
import type { WorldType } from 'src/types';

interface WorldSetupProps {
  worlds: WorldType[];
  handleWorldPress: (item: WorldType) => void;
}

const WorldSetup = ({ worlds, handleWorldPress }: WorldSetupProps) => {
  return (
    <View style={styles.container}>
      <CustomText variant="extraBold" style={styles.title}>
        {WORLD_SCREEN_INFO.title}
      </CustomText>

      <InfoContainer
        image={WORLD_SCREEN_INFO.image}
        description={WORLD_SCREEN_INFO.description}
      />

      <WorldList data={worlds} onPress={handleWorldPress} />
    </View>
  );
};

export default WorldSetup;
