import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps extends ViewProps {
  colorVariant?:
    | 'mainLiquid'
    | 'lightLiquid'
    | 'lightGreen'
    | 'darkGreen'
    | 'tabBar';
}

const CustomContainer = ({
  style,
  colorVariant = 'mainLiquid',
  ...rest
}: CustomContainerProps) => {
  return (
    <View style={[styles.container, styles[colorVariant], style]} {...rest} />
  );
};

export default CustomContainer;
