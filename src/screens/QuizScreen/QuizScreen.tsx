import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import QuizGame from './QuizGame/QuizGame';
import QuizResult from './QuizResult/QuizResult';
import QuizSetup from './QuizSetup/QuizSetup';
import { styles } from './styles';

import { QUIZ } from 'src/constants';
import type { QuizQuestionType, SceneStatusType } from 'src/types';
import { shuffleArray } from 'src/utils';

const QuizScreen = () => {
  const [status, setStatus] = useState<SceneStatusType>('idle');
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStartPress = useCallback(() => {
    const shuffled = shuffleArray(QUIZ);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setStatus('pending');
  }, []);

  const handleAnswerPress = useCallback(
    (answer: string) => {
      if (isAnswered) return;

      setSelectedAnswer(answer);
      setIsAnswered(true);

      const isCorrect =
        answer === questions[currentQuestionIndex].correctAnswer;

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      timerRef.current = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        } else {
          setStatus('finish');
        }
      }, 1000);
    },
    [isAnswered, questions, currentQuestionIndex],
  );

  const handleBackPress = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setStatus('idle');
  }, []);

  const handleRestartPress = useCallback(() => {
    setStatus('idle');
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setStatus('idle');
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      {status === 'idle' && <QuizSetup onStartPress={handleStartPress} />}

      {status === 'pending' && questions.length > 0 && (
        <QuizGame
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswerPress={handleAnswerPress}
          onBackPress={handleBackPress}
        />
      )}

      {status === 'finish' && (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          onRestartPress={handleRestartPress}
        />
      )}
    </SafeAreaView>
  );
};

export default QuizScreen;
