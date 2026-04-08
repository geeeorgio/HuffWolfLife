import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ONBOARDING_INFO } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen_1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handlePress = () => {
    navigation.navigate('OnboardingScreen_2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        {Array.from({ length: Object.keys(ONBOARDING_INFO).length }).map(
          (_, index) => (
            <View
              key={index}
              style={[
                styles.progressBarItem,
                index <= ONBOARDING_INFO.onboarding_2.index
                  ? styles.progressBarItemActive
                  : styles.progressBarItemInactive,
              ]}
            />
          ),
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={ONBOARDING_INFO.onboarding_2.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <CustomContainer
          colorVariant="mainLiquid"
          style={styles.liquidContainer}
        >
          <View style={styles.overlay} />
          <CustomText variant="extraBold" style={styles.title}>
            {ONBOARDING_INFO.onboarding_2.title}
          </CustomText>
          <CustomText variant="medium" style={styles.description}>
            {ONBOARDING_INFO.onboarding_2.description}
          </CustomText>
        </CustomContainer>

        <CustomButton
          variant="main"
          onPress={handlePress}
          style={styles.button}
        >
          <CustomText variant="black" style={styles.buttonText}>
            {ONBOARDING_INFO.onboarding_2.buttonText}
          </CustomText>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen_1;
