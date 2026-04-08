import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LikeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        d="M12.955.502c1.27.033 2.384.6 3.19 1.49l.157.182c1.634 1.991 1.785 5.333-.735 8.048l-.005.005-.005.006-6.092 6.992-.092.105a.5.5 0 0 1-.37.169.5.5 0 0 1-.365-.17l-6.181-7.095-.006-.007-.005-.005-.23-.256C-.073 7.3.112 4.104 1.695 2.174 2.51 1.18 3.688.538 5.044.502 6.207.472 7.46.885 8.7 1.84l.306.235.305-.235C10.47.945 11.64.525 12.736.5z"
      ></Path>
    </Svg>
  );
};

export default LikeIcon;
