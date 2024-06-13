import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = (props: IButtonProps) => {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress} aria-label={title}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
