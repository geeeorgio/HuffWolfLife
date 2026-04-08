import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: wp(5),
  },
  disabled: {
    opacity: 0.5,
  },
  typeButton: {
    flex: 0.49,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(8),
  },
  typeText: {
    fontSize: sp(14),
    color: COLORS.text_faded,
  },
  activeText: {
    color: COLORS.white,
  },
});
