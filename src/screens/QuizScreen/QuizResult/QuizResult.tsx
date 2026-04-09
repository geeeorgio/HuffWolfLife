import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { SMALL_LOGO } from 'src/constants';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestartPress: () => void;
}

const QuizResult = ({
  score,
  totalQuestions,
  onRestartPress,
}: QuizResultProps) => {
  return (
    <View style={styles.container}>
      <CustomText variant="extraBold" style={styles.title}>
        Quiz is over
      </CustomText>

      <View style={styles.avatarContainerWrapper}>
        <View style={styles.avatarContainer}>
          <Image
            source={SMALL_LOGO}
            style={styles.avatar}
            resizeMode="contain"
          />
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: `100%` }]} />
          </View>
        </View>
      </View>

      <CustomContainer colorVariant="lightLiquid" style={styles.scoreCard}>
        <CustomText variant="extraBold" style={styles.scoreLabel}>
          Your score
        </CustomText>
        <CustomText variant="extraBold" style={styles.scoreValue}>
          {score}/{totalQuestions}
        </CustomText>
      </CustomContainer>

      <CustomButton onPress={onRestartPress} style={styles.restartButton}>
        <CustomText variant="black" style={styles.restartButtonText}>
          Start again
        </CustomText>
      </CustomButton>
    </View>
  );
};

export default QuizResult;
