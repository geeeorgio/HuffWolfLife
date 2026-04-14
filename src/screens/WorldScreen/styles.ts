import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: hp(16),
    backgroundColor: COLORS.overlay_background,
  },
});
