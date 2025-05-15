import { StyleProp, Text, ViewStyle } from "react-native";
import { Pressable } from "react-native";

export default function Button({
  onPress,
  title,
  className,
  small,
  link,
  children,
}: {
  onPress: () => void;
  title: string;
  className?: string;
  small?: boolean;
  link?: string;
  children?: React.ReactNode;
}) {
  if (small) {
    return (
      <Pressable onPress={onPress} className={className}>
        {children}
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} className={className}>
      {children}
    </Pressable>
  );
}
