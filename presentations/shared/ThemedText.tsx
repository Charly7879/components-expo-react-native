/**
 * ThemedText:
 * Componente que "hereda" las props del componente Text de Expo React
 * para definir los estilos de la aplicación.
 */
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
    className?: string;
    type?: 'normal' | 'h1' | 'h2' | 'h3' | 'bold' | 'link'
}

const ThemedText = ({
    className,
    type,
    ...rest
}: Props) => {

    // mt-10 text-light-primary dark:text-dark-primary
    return (
        <Text
            className={[
                'text-light-primary dark:text-dark-primary',
                type === 'normal' ? 'font-normal' : undefined,
                type === 'h1' ? 'text-3xl' : undefined,
                type === 'h2' ? 'text-2xl' : undefined,
                type === 'h3' ? 'text-xl' : undefined,
                type === 'bold' ? 'font-bold' : undefined,
                type === 'link' ? 'font-normal underline' : undefined,
                className,
            ].join(' ')}
            {...rest} // rest es igual que poner la propiedad "children"
        />
    )
};
export default ThemedText;