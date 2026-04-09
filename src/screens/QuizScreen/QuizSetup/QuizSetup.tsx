import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText, InfoContainer } from 'src/components';
import { QUIZ_SCREEN_INFO } from 'src/constants';

interface QuizSetupProps {
  onStartPress: () => void;
}

const QuizSetup = ({ onStartPress }: QuizSetupProps) => {
  return (
    <View style={styles.container}>
      <CustomText variant="extraBold" style={styles.title}>
        {QUIZ_SCREEN_INFO.title}
      </CustomText>

      <InfoContainer
        image={QUIZ_SCREEN_INFO.wolf_image}
        description={QUIZ_SCREEN_INFO.description}
      />

      <CustomButton onPress={onStartPress} style={styles.startButton}>
        <CustomText variant="black" style={styles.startButtonText}>
          {QUIZ_SCREEN_INFO.buttonText}
        </CustomText>
      </CustomButton>

      <View style={styles.imageContainer}>
        <Image
          source={QUIZ_SCREEN_INFO.quiz_image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default QuizSetup;
