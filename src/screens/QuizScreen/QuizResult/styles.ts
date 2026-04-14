import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: hp(16),
    alignItems: 'center',
  },
  title: {
    color: COLORS.text_main,
    fontSize: sp(22),
    textAlign: 'center',
    marginBottom: hp(16),
  },
  avatarContainerWrapper: {
    paddingTop: hp(50),
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    gap: hp(10),
    marginBottom: hp(16),
  },
  avatarContainer: {
    position: 'absolute',
    top: 0,
    width: wp(95),
    height: wp(95),
    borderRadius: wp(50),
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  progressBarContainer: {
    width: '90%',
    marginBottom: hp(20),
    borderWidth: wp(1),
    borderColor: COLORS.text_secondary,
    borderRadius: wp(22),
  },
  progressBarTrack: {
    width: '100%',
    height: hp(10),
    borderRadius: wp(4),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: wp(22),
    backgroundColor: COLORS.tab_icon_active,
  },
  scoreCard: {
    width: '60%',
    paddingVertical: hp(16),
    paddingHorizontal: wp(20),
    alignItems: 'center',
    gap: hp(4),
  },
  scoreLabel: {
    color: COLORS.text_main,
    fontSize: sp(16),
  },
  scoreValue: {
    color: COLORS.text_main,
    fontSize: sp(28),
    fontStyle: 'italic',
    fontWeight: '900',
  },
  restartButton: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(14),
  },
  restartButtonText: {
    color: COLORS.text_btn,
    fontSize: sp(16),
  },
});
