import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  bckg: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(15),
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
  },
  imageContainer: {
    width: '100%',
    height: hp(222),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  liquidContainer: {
    alignSelf: 'center',
    width: '90%',
    position: 'relative',
    paddingTop: hp(10),
    paddingBottom: hp(16),
    paddingHorizontal: wp(20),
    gap: hp(6),
    marginBottom: hp(20),
  },
  title: {
    color: COLORS.text_main,
    fontSize: sp(20),
  },
  description: {
    color: COLORS.text_secondary,
    fontSize: sp(14),
  },
  optionsContainer: {
    width: '80%',
    alignItems: 'center',
    gap: hp(8),
  },
  optionButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
  },
  optionText: {
    color: COLORS.white,
    fontSize: sp(14),
  },
  finishContainer: {
    width: '90%',
    height: hp(50),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(10),
  },
  nextButton: {
    flex: 0.6,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: sp(16),
  },
  helperButtonsContainer: {
    flex: 0.4,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(6),
  },
  helperButton: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
