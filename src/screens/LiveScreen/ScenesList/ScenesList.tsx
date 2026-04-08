import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import ScenesListItem from '../ScenesListItem/ScenesListItem';

import { styles } from './styles';

import { SCENES } from 'src/constants';
import type { SceneType } from 'src/types';

interface ScenesListProps {
  onPress: (item: SceneType) => void;
}

const ScenesList = ({ onPress }: ScenesListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: SceneType }) => {
      return <ScenesListItem item={item} onPress={onPress} />;
    },
    [onPress],
  );

  return (
    <FlatList
      data={SCENES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default ScenesList;
