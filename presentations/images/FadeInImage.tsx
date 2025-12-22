/**
 * FadeInImage:
 * Módulo para crear efecto fadeIn para las imáges en el screen InfinityScroll en IOS.
 */
import useAnimation from "@/hooks/useAnimation";
import { useState } from "react";
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from "react-native";

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({
    uri,
    style,
}: Props) => {

    // Estado de la Image sí ha cargado
    const [isLoading, setIsLoading] = useState(false);

    // Hoock personalizado de animaciones
    const { animatedOpacity, fadeIn } = useAnimation();

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading && (<ActivityIndicator />)
            }
            <Animated.Image
                source={{ uri }}
                style={[
                    style,
                    {
                        opacity: animatedOpacity,
                    }
                ]}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false);
                }}
            />
        </View>
    )
};
export default FadeInImage;
