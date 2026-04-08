import { Path, Svg, type SvgProps } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SurvivalIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 19 21" {...props}>
      <Path
        stroke={props.color ?? COLORS.text_main}
        strokeLinejoin="round"
        strokeWidth="1.833"
        d="M.917 3.326 9.17.916l8.246 2.41v4.94a12.06 12.06 0 0 1-8.249 11.442A12.06 12.06 0 0 1 .917 8.263z"
      ></Path>
      <Path
        stroke={props.color ?? COLORS.text_main}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.833"
        d="m5.042 9.625 3.208 3.209 5.5-5.5"
      ></Path>
    </Svg>
  );
};

export default SurvivalIcon;
