import ThemedButton from '@/presentations/shared/ThemedButton';
import ThemedView from '@/presentations/shared/ThemedView';
import { useRef } from 'react';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const Animation101Screen = () => {

  // Inicializar un Animated con useRef
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  // Método de animación fadeIn
  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      //easing: Easing.elastic(3) // easing son efectos de movimiento
      easing: Easing.bounce, // Efecto revote
    }).start();
  };

  // Método de animación fadeOut
  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      // }).start(() => animatedTop.setValue(-100)); "Opcional"
    }).start(() => animatedTop.resetAnimation());
  };

  return (
    <ThemedView margin className="justify-center items-center flex-1">

      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={fadeIn}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton
        className="my-5"
        onPress={fadeOut}
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
