import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { FILTER_TYPES } from 'src/types';
import type { FilterType } from 'src/types';

interface CustomFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  disabled?: boolean;
}

const CustomFilter = ({ filter, setFilter, disabled }: CustomFilterProps) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      {FILTER_TYPES.map((type) => (
        <CustomButton
          key={type}
          variant={type === filter ? 'main' : 'back'}
          style={styles.typeButton}
          onPress={() => setFilter(type)}
          disabled={disabled}
        >
          <CustomText
            variant="semiBold"
            style={[styles.typeText, type === filter && styles.activeText]}
          >
            {type}
          </CustomText>
        </CustomButton>
      ))}
    </View>
  );
};

export default CustomFilter;
