import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

/**
 * GestureHandlerRootView:
 * No viene por defecto en react-native se debe instalar desde:
 * https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation
 */
import { allRoutes } from '@/constants/Routes';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useThemeColor } from './../components/Themed';
import "./../global.css";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  /**
   * El background lo define la librería por defecto del proyecto por Expo desde:
   * import { useThemeColor } from './../components/Themed';
   * Ejemplo background personalizado:
   * const backgroudColor = useThemeColor({ light: 'red', dark: 'gray' }, 'background');
   */
  const backgroudColor = useThemeColor({}, 'background');

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroudColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroudColor,
            },
            headerStyle: {
              backgroundColor: backgroudColor,
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: 'Home screen'
            }}
          />
          {
            allRoutes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                }}
              />
            ))
          }
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
