import { Link } from "expo-router";
import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function App() {
  verifyInstallation();
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl text-red-500">
        Hola, ya funciona nativewind
      </Text>

      <Link href="/settings">settings</Link>
    </View>
  );
}
  