import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import WorldDetails from './WorldDetails/WorldDetails';
import WorldSetup from './WorldSetup/WorldSetup';

import { usePersistContext } from 'src/hooks/usePersistContext';
import type { WorldType } from 'src/types';

const WorldScreen = () => {
  const { worldList, setContextWorldIds } = usePersistContext();
  const [currentWorldId, setCurrentWorldId] = useState<string | null>(null);

  const handleWorldPress = useCallback((world: WorldType) => {
    setCurrentWorldId(world.id);
  }, []);

  const handleBackPress = useCallback(() => {
    setCurrentWorldId(null);
  }, []);

  const handleFavoritePress = useCallback(
    (id: string) => {
      setContextWorldIds(id);
    },
    [setContextWorldIds],
  );

  const currentWorld = useMemo(() => {
    return worldList.find((world) => world.id === currentWorldId);
  }, [currentWorldId, worldList]);

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
