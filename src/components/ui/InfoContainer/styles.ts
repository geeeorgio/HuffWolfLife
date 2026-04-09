import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  info: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    gap: wp(6),
    paddingHorizontal: wp(10),
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.overlay_background,
  },
  imageContainer: {
    width: wp(80),
    height: hp(95),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: wp(10),
  },
  description: {
    color: COLORS.text_secondary,
    fontSize: sp(11),
  },
});
