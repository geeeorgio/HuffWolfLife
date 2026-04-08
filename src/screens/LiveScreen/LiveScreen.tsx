import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenSetup from './ScreenSetup/ScreenSetup';
import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { SCENES, WOLF_LIFE } from 'src/constants';
import type { SceneOptionType, SceneStatusType, SceneType } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

const LiveScreen = () => {
  const [status, setStatus] = useState<SceneStatusType>('idle');
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number | null>(
    null,
  );
  const [currentOption, setCurrentOption] = useState<
    SceneOptionType | undefined
  >(undefined);

  const currentScene = useMemo(
    () => (currentSceneIndex !== null ? SCENES[currentSceneIndex] : undefined),
    [currentSceneIndex],
  );

  const handleScenePress = useCallback((item: SceneType) => {
    const index = SCENES.findIndex((scene) => scene.id === item.id);

    if (index === -1) return;

    setStatus('pending');
    setCurrentSceneIndex(index);
  }, []);

  const handleBackPress = useCallback(() => {
    setStatus('idle');
    setCurrentSceneIndex(null);
  }, []);

  const handleOptionPress = useCallback((option: SceneOptionType) => {
    setCurrentOption(option);
    setStatus('finish');
  }, []);

  const handleRefreshPress = useCallback(() => {
    setStatus('pending');
    setCurrentOption(undefined);
  }, []);

  const handleNextScenePress = useCallback(() => {
    setCurrentOption(undefined);
    setStatus('pending');

    setCurrentSceneIndex((prev) => {
      if (prev === null) return 0;

      return prev === SCENES.length - 1 ? 0 : prev + 1;
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentSceneIndex(null);
        setCurrentOption(undefined);
        setStatus('idle');
      };
    }, []),
  );

  return (
    <ImageBackground
      source={currentScene?.image || undefined}
      style={styles.bckg}
      resizeMode="cover"
      blurRadius={1}
    >
      <SafeAreaView style={styles.container}>
        {status === 'idle' && (
          <ScreenSetup handleScenePress={handleScenePress} />
        )}

        {status !== 'idle' && currentScene && (
          <>
            <CustomButton
              variant="back"
              onPress={handleBackPress}
              style={styles.backButton}
            >
              <CustomIcon name="back" width={wp(8)} height={hp(14)} />
            </CustomButton>

            <View style={styles.imageContainer}>
              <Image
                source={status === 'pending' ? WOLF_LIFE.one : WOLF_LIFE.two}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <CustomContainer
              colorVariant="lightLiquid"
              style={styles.liquidContainer}
            >
              {status === 'pending' && (
                <>
                  <CustomText variant="extraBold" style={styles.title}>
                    {currentScene.name}
                  </CustomText>
                  <CustomText variant="medium" style={styles.description}>
                    {currentScene.description}
                  </CustomText>
                </>
              )}

              {status === 'finish' && (
                <>
                  <CustomText variant="extraBold" style={styles.title}>
                    {currentOption?.name}
                  </CustomText>
                  <CustomText variant="medium" style={styles.description}>
                    {currentOption?.description}
                  </CustomText>
                </>
              )}
            </CustomContainer>

            {status === 'pending' && (
              <View style={styles.optionsContainer}>
                {currentScene.options.map((option) => (
                  <CustomButton
                    key={option.id}
                    onPress={() => handleOptionPress(option)}
                    style={styles.optionButton}
                  >
                    <CustomText variant="semiBold" style={styles.optionText}>
                      {option.name}
                    </CustomText>
                  </CustomButton>
                ))}
              </View>
            )}

            {status === 'finish' && (
              <View style={styles.finishContainer}>
                <CustomButton
                  onPress={handleNextScenePress}
                  style={styles.nextButton}
                >
                  <CustomText variant="black" style={styles.buttonText}>
                    Next Scene
                  </CustomText>
                </CustomButton>
                <View style={styles.helperButtonsContainer}>
                  <CustomButton
                    onPress={handleRefreshPress}
                    style={styles.helperButton}
                  >
                    <CustomIcon name="refresh" width={wp(28)} height={hp(28)} />
                  </CustomButton>
                  <CustomButton
                    onPress={handleShare}
                    style={styles.helperButton}
                  >
                    <CustomIcon name="share" width={wp(21)} height={hp(21)} />
                  </CustomButton>
                </View>
              </View>
            )}
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LiveScreen;
