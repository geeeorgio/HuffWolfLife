import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import LearnListItem from '../LearnListitem/LearnListItem';

import { styles } from './styles';

import type { StoryType } from 'src/types';

interface LearnListProps {
  data: StoryType[];
  onPress: (item: StoryType) => void;
}

const LearnList = ({ data, onPress }: LearnListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: StoryType }) => {
      return <LearnListItem item={item} onPress={onPress} />;
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

export default LearnList;
