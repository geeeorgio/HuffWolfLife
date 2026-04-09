import type { RouteProp } from '@react-navigation/native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import WorldDetails from './WorldDetails/WorldDetails';
import WorldSetup from './WorldSetup/WorldSetup';

import { usePersistContext } from 'src/hooks/usePersistContext';
import type {
  MainStackNavigationProp,
  MainStackParamList,
  WorldType,
} from 'src/types';

const WorldScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const { params } = useRoute<RouteProp<MainStackParamList, 'WorldScreen'>>();
  const worldId = params?.worldId;
  const fromSaved = params?.fromSaved;

  const { worldList, setContextWorldIds } = usePersistContext();
  const [currentWorldId, setCurrentWorldId] = useState<string | null>(null);

  useEffect(() => {
    if (worldId) {
      setCurrentWorldId(worldId);
    }
  }, [worldId]);

  const handleWorldPress = useCallback((world: WorldType) => {
    setCurrentWorldId(world.id);
  }, []);

  const handleBackPress = useCallback(() => {
    if (fromSaved) {
      navigation.navigate('SavedScreen');
      return;
    }

    setCurrentWorldId(null);
  }, [navigation, fromSaved]);

  const handleFavoritePress = useCallback(
    (id: string) => {
      setContextWorldIds(id);
    },
    [setContextWorldIds],
  );

  const currentWorld = useMemo(() => {
    return worldList.find((world) => world.id === currentWorldId);
  }, [currentWorldId, worldList]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentWorldId(null);
        navigation.setParams({ worldId: undefined, fromSaved: undefined });
      };
    }, [navigation]),
  );

  return (
    <SafeAreaView style={styles.container}>
      {currentWorld ? (
        <WorldDetails
          world={currentWorld}
          onBackPress={handleBackPress}
          onFavoritePress={handleFavoritePress}
        />
      ) : (
        <WorldSetup worlds={worldList} handleWorldPress={handleWorldPress} />
      )}
    </SafeAreaView>
  );
};

export default WorldScreen;
