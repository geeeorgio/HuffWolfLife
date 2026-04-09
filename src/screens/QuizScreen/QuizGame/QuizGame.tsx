import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { SMALL_LOGO } from 'src/constants';
import type { QuizQuestionType } from 'src/types';
import { hp, wp } from 'src/utils';

interface QuizGameProps {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onAnswerPress: (answer: string) => void;
  onBackPress: () => void;
}

const QuizGame = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  isAnswered,
  onAnswerPress,
  onBackPress,
}: QuizGameProps) => {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const getOptionVariant = (option: string) => {
    if (!isAnswered) return 'main';
    if (option === question.correctAnswer) return 'quizGreen';
    if (option === selectedAnswer) return 'quizRed';
    return 'main';
  };

  const getOptionOpacity = (option: string) => {
    if (!isAnswered) return 1;
    if (option === question.correctAnswer || option === selectedAnswer)
      return 1;
    return 0.4;
  };

  return (
    <View style={styles.container}>
      <CustomButton
        variant="back"
        onPress={onBackPress}
        style={styles.backButton}
      >
        <CustomIcon name="back" width={wp(8)} height={hp(14)} />
      </CustomButton>

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
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>
      </View>

      <CustomContainer colorVariant="lightLiquid" style={styles.questionCard}>
        <CustomText variant="medium" style={styles.questionCounter}>
          Question {questionIndex + 1}/{totalQuestions}
        </CustomText>
        <CustomText variant="extraBold" style={styles.questionText}>
          {question.question}
        </CustomText>
      </CustomContainer>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <CustomButton
            key={option}
            variant={getOptionVariant(option)}
            onPress={() => onAnswerPress(option)}
            disabled={isAnswered}
            style={[styles.optionButton, { opacity: getOptionOpacity(option) }]}
          >
            <CustomText variant="semiBold" style={styles.optionText}>
              {option}
            </CustomText>
          </CustomButton>
        ))}
      </View>
    </View>
  );
};

export default QuizGame;
