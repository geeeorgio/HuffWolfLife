import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ClimatIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 8 15" {...props}>
      <Path
        fill={props.color ?? COLORS.text_main}
        d="M3.667 14.667q-1.532 0-2.6-1.067Q0 12.53 0 11q0-.994.499-1.821a4 4 0 0 1 1.334-1.352V1.833q0-.775.53-1.304A1.77 1.77 0 0 1 3.666 0q.775 0 1.304.529.53.529.529 1.304v5.994q.836.524 1.326 1.352.49.827.507 1.821-.018 1.532-1.085 2.6a3.51 3.51 0 0 1-2.581 1.067M2.75 5.5h1.833V1.833a.89.89 0 0 0-.264-.652.9.9 0 0 0-.652-.264.88.88 0 0 0-.653.264.9.9 0 0 0-.264.652z"
      ></Path>
    </Svg>
  );
};

export default ClimatIcon;
