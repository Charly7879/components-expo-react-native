/**
 * ThemedInputText:
 * Módulo de inputText de react-native peronalizado.
 */

import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    className?: string;
}

const ThemedInputText = ({
    className,
    ...rest
}: Props) => {
    return (
        <TextInput
            className={`py-4 px-2 text-black dark:text-white ${className}`}
            placeholder="grey"
            {...rest}
        />
    );
};
export default ThemedInputText;