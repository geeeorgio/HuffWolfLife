import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(12),
    bottom: 0,
    zIndex: 1000,
    paddingTop: wp(20),
    paddingHorizontal: wp(14),
    paddingBottom: wp(50),
    borderRadius: 0,
    borderTopLeftRadius: wp(18),
    borderTopRightRadius: wp(18),
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(100),
    paddingVertical: hp(11),
    paddingHorizontal: wp(18),
  },
  btnActive: {
    backgroundColor: COLORS.tab_icon_active,
  },
  btnInactive: {
    backgroundColor: COLORS.tab_icon_inactive,
  },
});
