import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: hp(10),
    paddingHorizontal: wp(15),
  },
  backButton: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    gap: hp(10),
    paddingBottom: hp(100),
    paddingHorizontal: wp(20),
  },
  detailsContainer: {
    width: '100%',
    gap: hp(10),
    padding: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    color: COLORS.white,
    fontSize: sp(14),
  },
  actionBtns: {
    alignSelf: 'center',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(10),
  },
  actionBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(16),
  },
});
