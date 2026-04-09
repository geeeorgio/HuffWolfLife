import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import WorldListItem from '../WorldListitem/WorldListItem';

import { styles } from './styles';

import type { WorldType } from 'src/types';

interface WorldListProps {
  data: WorldType[];
  onPress: (item: WorldType) => void;
}

const WorldList = ({ data, onPress }: WorldListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: WorldType }) => {
      return <WorldListItem item={item} onPress={onPress} />;
    },
    [onPress],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default WorldList;
