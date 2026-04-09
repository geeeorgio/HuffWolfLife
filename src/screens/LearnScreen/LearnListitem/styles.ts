import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100%',
    height: hp(180),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: wp(16),
    paddingVertical: hp(8),
    gap: hp(6),
    backgroundColor: COLORS.liquid_container,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.overlay_background,
  },
  name: {
    color: COLORS.text_main,
    fontSize: sp(16),
  },
  description: {
    color: COLORS.text_secondary,
    fontSize: sp(12),
  },
});
