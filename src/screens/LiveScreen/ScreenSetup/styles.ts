import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: hp(16),
  },
  title: {
    color: COLORS.text_main,
    textAlign: 'center',
    fontSize: sp(20),
  },
});
