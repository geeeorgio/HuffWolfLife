import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: COLORS.main_border,
  },
  imgContainer: {
    flex: 0.45,
    height: hp(160),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 0.55,
    position: 'relative',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingHorizontal: wp(12),
    paddingVertical: hp(4),
    gap: hp(6),
    backgroundColor: COLORS.wolf_light_green_container,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.liquid_container,
  },
  name: {
    color: COLORS.text_main,
    fontSize: sp(18),
  },
  description: {
    color: COLORS.black,
    fontSize: sp(11),
  },
});
