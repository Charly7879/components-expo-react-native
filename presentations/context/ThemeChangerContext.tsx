/**
 * ThemeChangerContext:
 * Contexto para cambiar de tema de la aplicación (dark, light, system)
 * 
 * AsyncStorage:
 * Storage para guardar preferencias del usuario
 * 
 * Fuente:
 * https://docs.expo.dev/develop/user-interface/store-data/
 * 
 * Instalación:
 * https://react-native-async-storage.github.io/2.0/Usage/
*/
import { Colors } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

// Interfaz del contexto
interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;
    bgColor: string;
    toggleTheme: () => void;
    setSystemTheme: () => void;
}

// Contexto
const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom hook para acceder al ThemeChangerContext
export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext);
    return themeChanger;
};

// Provider objeto o FuncionalComponent (FC), para acceder al contexto
export const ThemeChangerProvider = ({
    children
}: PropsWithChildren) => {

    const { colorScheme, setColorScheme } = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currenTheme = (isSystemThemeEnabled)
        ? colorScheme
        : (isDarkMode) ? 'dark' : 'light';

    // Comprobar cual es el bacgroundColor
    const backgroundColor = isDarkMode
        ? Colors.dark.background
        : Colors.light.background;

    // Comprobar el theme por medio de AsyncStorage
    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then((theme) => {
            if (!theme) return;

            setIsDarkMode(theme === 'dark');
            setIsSystemThemeEnabled(theme === 'system');
            setColorScheme(theme as 'light' | 'dark' | 'system');
        });
    }, []);

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currenTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnabled,
                    bgColor: backgroundColor,
                    toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode);
                        setColorScheme(isDarkMode ? 'light' : 'dark');
                        setIsSystemThemeEnabled(false);
                        // Guardar en storage
                        await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark');
                    },
                    setSystemTheme: async () => {
                        setIsSystemThemeEnabled(true);
                        setColorScheme('system');
                        // Guardar en storage
                        await AsyncStorage.setItem('selected-theme', 'system');
                    },
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    );
};