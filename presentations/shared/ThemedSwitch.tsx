/**
 * ThemedSwintch:
 * Switch personalizado, heredando sus props de Switch de react-native.
 */
import { useThemeColor } from "@/components/Themed";
import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props {
    className?: string;
    text?: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({
    className,
    text,
    value,
    onValueChange,
}: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                ios_backgroundColor={value ? 'green' : 'red'}
                trackColor={{
                    false: 'grey',
                    true: switchActiveColor,
                }}
            />
        </Pressable>
    );
};
export default ThemedSwitch;