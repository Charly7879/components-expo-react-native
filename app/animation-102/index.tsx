/**
 * Animation102Screen:
 * Componente de animación animatedvaluexy fuente:
 * https://reactnative.dev/docs/animatedvaluexy
 */
import ThemedView from '@/presentations/shared/ThemedView';
import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

const Animation102Screen = () => {

  // Inicializar un Animated con useRef
  const pan = useRef(new Animated.ValueXY()).current;

  // Animación
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: false,
        },
      ).start();
    },
  });

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        {...panResponder.panHandlers}
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={[{
          width: 150,
          height: 150,
        },
        pan.getLayout(),
        ]}
      />
    </ThemedView>
  );
};
export default Animation102Screen;
