import ThemedButton from "@/presentations/shared/ThemedButton";
import ThemedText from "@/presentations/shared/ThemedText";
import ThemedView from "@/presentations/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const ModalWindow2 = () => {

    // Cambiar status bar para IOS
    const isIos = Platform.OS === 'ios';

    return (
        <ThemedView
            className="justify-center items-center flex-1"
            bgColor="#254723"
        >
            <ThemedText className="mb-3">Modal Window 2</ThemedText>
            <ThemedButton
                className='mx-4'
                onPress={() => router.dismiss()}
            >
                Cerrar Modal 2
            </ThemedButton>
            <StatusBar style={isIos ? 'light' : 'auto'} />
        </ThemedView>
    )
};
export default ModalWindow2;