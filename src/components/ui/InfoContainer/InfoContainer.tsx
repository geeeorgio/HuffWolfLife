import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Image, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { SMALL_LOGO } from 'src/constants';

interface InfoContainerProps {
  image?: ImageSourcePropType | undefined;
  description: string;
}

const InfoContainer = ({ image, description }: InfoContainerProps) => {
  return (
    <CustomContainer colorVariant="mainLiquid" style={styles.info}>
      <View style={styles.overlay} />
      <View style={styles.imageContainer}>
        <Image
          source={image || SMALL_LOGO}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <CustomText variant="medium" style={styles.description}>
          {description}
        </CustomText>
      </View>
    </CustomContainer>
  );
};

export default InfoContainer;
