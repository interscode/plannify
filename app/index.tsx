import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function App() {
  verifyInstallation();
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-red-500 text-2xl">
        Hola, ya funciona nativewind
      </Text>
    </View>
  );
}
