import { ScrollView, View } from 'react-native';

import WorldListItem from '../WorldListitem/WorldListItem';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { ICONS_MAP } from 'src/components/ui/CustomIcons/iconsMap';
import { COLORS } from 'src/constants';
import type { WorldType } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface WorldDetailsProps {
  world: WorldType;
  onBackPress: () => void;
  onFavoritePress: (id: string) => void;
}

const WorldDetails = ({
  world,
  onBackPress,
  onFavoritePress,
}: WorldDetailsProps) => {
  const sections = [
    { label: 'Behavior', Icon: ICONS_MAP['behavior'], value: world.behavior },
    { label: 'Survival', Icon: ICONS_MAP['survival'], value: world.survival },
    { label: 'Climate', Icon: ICONS_MAP['climate'], value: world.climate },
  ];

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
        <WorldListItem item={world} onPress={() => {}} disabled />

        {sections.map(({ label, Icon, value }) => (
          <CustomContainer
            key={label}
            colorVariant="lightGreen"
            style={styles.detailsContainer}
          >
            <View style={styles.overlay} />
            <View style={styles.headerContent}>
              <CustomText variant="extraBold" style={styles.textHeader}>
                {label}
              </CustomText>
              <Icon width={wp(18)} height={hp(18)} />
            </View>
            <CustomText variant="medium" style={styles.textDetails}>
              {value}
            </CustomText>
          </CustomContainer>
        ))}

        <View style={styles.actionBtns}>
          <CustomButton
            style={styles.actionBtn}
            onPress={() => onFavoritePress(world.id)}
          >
            <CustomIcon
              name="like"
              width={wp(18)}
              height={hp(18)}
              fill={world.isFavorite ? COLORS.white : 'transparent'}
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

export default WorldDetails;
