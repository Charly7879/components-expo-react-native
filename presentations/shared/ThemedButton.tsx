/**
 * ThemedButton:
 * Componente para botón personalizado que hereda las props del componente de react-native Pressable.
 */
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({
    className,
    children,
    ...rest // Herencia de todas las propiedades del componente padre
}: Props) => {
    return (
        <Pressable
            className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            {...rest}
        >
            <Text className="text-white text-2xl">{children}</Text>
        </Pressable>
    )
};
export default ThemedButton;