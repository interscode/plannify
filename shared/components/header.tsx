import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { IconSearch } from "@tabler/icons-react-native";
import { Text, View } from "react-native";

export default function Header({ route, options }: BottomTabHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  if (route.name === "home") {
    return (
      <View className="mb-2 h-16 w-full flex-row items-center gap-2">
        <View className="size-12 items-center justify-center rounded-xl bg-red-600">
          <Text className="text-2xl font-bold text-white">M</Text>
        </View>
        <View>
          <Text>Hello!</Text>
          <Text className="text-xl font-bold">Mike Balderas</Text>
        </View>
      </View>
    );
  }

  return (
    <View className="h-16 w-full flex-row items-center justify-between">
      <Text className="text-2xl font-bold">{title}</Text>
      <IconSearch />
    </View>
  );
}
