import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 21 18" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M19.355 8.167 14 2.812v2.87l-1.003.151c-5.029.712-8.435 3.349-10.384 7.385 2.707-1.913 6.067-2.835 10.22-2.835H14v3.139m-2.333-1.949C6.452 11.818 2.718 13.697 0 17.5 1.167 11.667 4.667 5.833 12.833 4.667V0L21 8.167l-8.167 8.166V11.55c-.385 0-.77.012-1.166.023"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
