import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(22),
  },
  mainLiquid: {
    backgroundColor: COLORS.liquid_container,
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
  },
  lightLiquid: {
    backgroundColor: COLORS.ligh_liquid_container,
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
  },
  lightGreen: {
    backgroundColor: COLORS.wolf_light_green_container,
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
  },
  darkGreen: {
    backgroundColor: COLORS.dark_green_container,
  },
  tabBar: {
    backgroundColor: COLORS.tab_bar_bckg,
  },
});
