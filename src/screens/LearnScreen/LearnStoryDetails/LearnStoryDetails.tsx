import { ScrollView, View } from 'react-native';

import LearnListItem from '../LearnListitem/LearnListItem';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { COLORS } from 'src/constants';
import type { StoryType } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface LearnStoryDetailsProps {
  story: StoryType;
  onBackPress: () => void;
  onFavoritePress: (id: string) => void;
}

const LearnStoryDetails = ({
  story,
  onBackPress,
  onFavoritePress,
}: LearnStoryDetailsProps) => {
  return (
    <View style={styles.container}>
      <CustomButton
        variant="back"
        onPress={onBackPress}
        style={styles.backButton}
      >
        <CustomIcon name="back" width={wp(8)} height={hp(14)} />
      </CustomButton>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <LearnListItem item={story} onPress={() => {}} disabled />

        <CustomContainer
          colorVariant="darkGreen"
          style={styles.detailsContainer}
        >
          <CustomIcon name="learn" width={wp(18)} height={hp(18)} />
          <CustomText variant="medium" style={styles.details}>
            {story.full_description}
          </CustomText>
        </CustomContainer>

        <View style={styles.actionBtns}>
          <CustomButton
            style={styles.actionBtn}
            onPress={() => onFavoritePress(story.id)}
          >
            <CustomIcon
              name="like"
              width={wp(18)}
              height={hp(18)}
              fill={story.isFavorite ? COLORS.white : 'transparent'}
            />
          </CustomButton>
          <CustomButton style={styles.actionBtn} onPress={handleShare}>
            <CustomIcon name="share" width={wp(18)} height={hp(18)} />
          </CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default LearnStoryDetails;
