import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { IconChevronLeft, IconSearch } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { useTheme } from "@/shared/hooks/use-theme";

export default function Header({ route, options }: NativeStackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  const router = useRouter();
  const { theme } = useTheme();

  if (route.name === "index") {
    return (
      <View
        className="h-16 w-full flex-row items-center justify-between"
        style={{ paddingHorizontal: 25 }}
      >
        <Text className="text-2xl font-bold dark:text-light">{title}</Text>
        <IconSearch />
      </View>
    );
  }

  return (
    <View
      className="h-16 w-full flex-row items-center justify-between"
      style={{ paddingHorizontal: 25 }}
    >
      <Pressable onPress={() => router.back()}>
        <IconChevronLeft color={theme === "light" ? "#0a0a0a" : "#f8f8ff"} />
      </Pressable>

      <Text className="text-2xl font-bold dark:text-light">{title}</Text>
      <View />
    </View>
  );
}
