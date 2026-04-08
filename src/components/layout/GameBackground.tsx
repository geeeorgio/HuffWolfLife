import { ImageBackground, StyleSheet } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';

const GameBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
