import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: hp(140),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: sp(20),
  },
});
