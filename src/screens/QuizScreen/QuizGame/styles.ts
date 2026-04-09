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
  backButton: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
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
    borderColor: COLORS.tab_bar_bckg,
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
    borderColor: COLORS.white,
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
    backgroundColor: COLORS.tab_bar_bckg,
  },
  questionCard: {
    width: '90%',
    paddingVertical: hp(16),
    paddingHorizontal: wp(20),
    alignItems: 'center',
    gap: hp(8),
  },
  questionCounter: {
    color: COLORS.text_secondary,
    fontSize: sp(11),
  },
  questionText: {
    color: COLORS.text_main,
    fontSize: sp(15),
    textAlign: 'center',
  },
  optionsContainer: {
    width: '80%',
    alignItems: 'center',
    gap: hp(10),
  },
  optionButton: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: hp(16),
    paddingHorizontal: wp(20),
  },
  optionText: {
    color: COLORS.white,
    fontSize: sp(12),
  },
});
