/**
 * useAnimation:
 * Hook personalizado para las animaciones
 */
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = () => {

    // Inicializar un Animated con useRef
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    // Método de animación fadeIn
    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { },
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);
    };

    // Método de animación fadeOut
    const fadeOut = ({
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { },
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
            // }).start(() => animatedTop.setValue(-100)); "Opcional"
            //}).start(() => animatedTop.resetAnimation());
        }).start(callback);
    };

    const startMovingTopPosition = ({
        initialPositon = -100,
        duration = 700,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { },
    }) => {

        animatedTop.setValue(initialPositon);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing, // Efecto revote
        }).start(callback);
    };

    return {
        animatedOpacity,
        animatedTop,

        // Methods
        fadeIn,
        fadeOut,
        startMovingTopPosition,
    };


};

export default useAnimation;