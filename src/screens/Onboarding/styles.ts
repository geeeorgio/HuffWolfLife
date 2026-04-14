import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(30),
    paddingTop: wp(24),
    paddingBottom: hp(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.overlay_background,
  },
  progressBarContainer: {
    flexDirection: 'row',
    gap: wp(3),
  },
  progressBarItem: {
    width: wp(30),
    height: wp(6),
    borderRadius: wp(6),
    borderColor: COLORS.onbd_dot_active,
    borderWidth: wp(1),
  },
  progressBarItemActive: {
    backgroundColor: COLORS.onbd_dot_active,
  },
  progressBarItemInactive: {
    backgroundColor: COLORS.onbd_dot_inactive,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: hp(333),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: '95%',
  },
  liquidContainer: {
    alignSelf: 'center',
    width: '90%',
    position: 'relative',
    paddingTop: hp(10),
    paddingBottom: hp(16),
    paddingHorizontal: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gap: hp(8),
    marginBottom: hp(10),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.overlay_background,
  },
  title: {
    color: COLORS.text_main,
    textAlign: 'center',
    fontSize: sp(18),
  },
  description: {
    color: COLORS.text_secondary,
    textAlign: 'center',
    fontSize: sp(12),
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
  },
  buttonText: {
    color: COLORS.text_btn,
    fontSize: sp(15),
  },
});
