import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(22),
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
  },
  default: {
    borderColor: COLORS.grey_border,
  },
  main: {
    backgroundColor: COLORS.main_green_container,
  },
  back: {
    backgroundColor: COLORS.dark_liquid_container,
  },
  quizRed: {
    backgroundColor: COLORS.quiz_red,
  },
  quizGreen: {
    backgroundColor: COLORS.quiz_green,
  },
  learnActive: {
    backgroundColor: COLORS.learn_green_container,
    borderColor: COLORS.tab_bar_bckg,
  },
  learnInactive: {
    backgroundColor: COLORS.learn_liquid_container,
    borderColor: COLORS.tab_bar_bckg,
  },
});
