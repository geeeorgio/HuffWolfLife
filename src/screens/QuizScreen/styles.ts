import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(15),
    alignItems: 'center',
    backgroundColor: COLORS.overlay_background,
  },
});
