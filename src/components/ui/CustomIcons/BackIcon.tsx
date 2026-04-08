import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 8 13" {...props}>
      <Path
        fill={props.color ?? COLORS.tab_icon_active}
        fillRule="evenodd"
        d="M.293 5.657 5.95 0l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414L.293 7.071a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
