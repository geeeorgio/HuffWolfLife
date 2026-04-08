import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const QuizIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 21 21" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.751 5.75c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991-.598.852-1.683 1.663-1.683 2.676"
      ></Path>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.751 11.75h.009"
      ></Path>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.251 17.75c1.05.87 2.315 1.424 3.764 1.519 1.141.075 2.333.075 3.473 0a4 4 0 0 0 1.188-.268c.41-.167.614-.25.719-.237.104.012.255.122.557.342.533.388 1.204.666 2.2.643.503-.012.755-.019.867-.208.113-.19-.027-.452-.308-.977-.39-.728-.636-1.561-.262-2.229.643-.954 1.19-2.083 1.27-3.303.043-.655.043-1.334 0-1.99a6.7 6.7 0 0 0-.568-2.292"
      ></Path>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.488 15.269a6.685 6.685 0 0 0 6.23-6.237c.044-.655.044-1.334 0-1.99a6.685 6.685 0 0 0-6.23-6.236 27 27 0 0 0-3.473 0A6.686 6.686 0 0 0 .783 7.043a15 15 0 0 0 0 1.99c.08 1.22.627 2.349 1.27 3.302.374.668.127 1.5-.262 2.23-.28.524-.42.786-.308.976.113.19.364.195.868.208.995.024 1.666-.255 2.199-.643.302-.22.453-.33.557-.342s.31.07.72.237c.368.15.795.242 1.188.268 1.139.075 2.33.075 3.473 0Z"
      ></Path>
    </Svg>
  );
};

export default QuizIcon;
