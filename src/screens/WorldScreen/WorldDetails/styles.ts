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
  },
  detailsContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    gap: hp(10),
    padding: wp(16),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.liquid_container,
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
  },
  textHeader: {
    color: COLORS.text_main,
    fontSize: sp(18),
  },
  textDetails: {
    color: COLORS.black,
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
