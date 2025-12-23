/**
 * ThemesScreen:
 * Módulo para cambiar el tema de la aplicación white, dark, system por preferencias del usuario
 * https://www.nativewind.dev/docs/api/use-color-scheme
 */
import { useThemeChangerContext } from '@/presentations/context/ThemeChangerContext';
import ThemedCard from '@/presentations/shared/ThemedCard';
import ThemedSwitch from '@/presentations/shared/ThemedSwitch';
import ThemedView from '@/presentations/shared/ThemedView';
import { useState } from 'react';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext();

  // const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSetting, setDarkModeSetting] = useState({
    // darkMode: colorScheme === 'dark',
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();
    setDarkModeSetting({
      darkMode: value,
      systemMode: false,
    })
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSetting({
      darkMode: darkModeSetting.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSetting.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='System Mode'
          className='mb-5'
          value={darkModeSetting.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
