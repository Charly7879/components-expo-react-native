/**
 * _layout:
 * Ruta principal de modal. Cada vez que se llame a /modal
 */

import { Stack } from 'expo-router';

const ModalLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" /> {/* "index" Módulo que va a mostrar el modal */}
            <Stack.Screen
                name="modalWindow"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="modalWindow2"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
};
export default ModalLayout;