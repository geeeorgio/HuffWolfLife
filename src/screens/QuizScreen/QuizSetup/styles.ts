import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: hp(16),
    paddingBottom: hp(20),
  },
  title: {
    color: COLORS.text_main,
    textAlign: 'center',
    fontSize: sp(20),
  },
  startButton: {
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(14),
  },
  startButtonText: {
    color: COLORS.text_btn,
    fontSize: sp(16),
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: hp(280),
  },
});
